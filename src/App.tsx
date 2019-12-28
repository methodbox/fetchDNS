import React, { Component } from 'react';
import validator from 'validator';
/** @styles */
import { updateTextFields } from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/Dns.css';
import './styles/App.css';
/** @components */
import Nav from './components/Nav';
import RecordHeader from './components/RecordHeader';
import DnsRecord from './components/DnsRecord';
import SearchForm from './components/SearchForm';

export type State = {
  typeA1: Array<object>;
  typeAAAA28: Array<object>;
  typeNS2: Array<object>;
  typeSoa6: Array<object>;
  typeMx15: Array<object>;
  typeTxt16: Array<object>;
  record: Array<object> | any;
  domainInput: string;
  showRecordHeader: boolean;
  noRecordFound: boolean;
};

export type Record = {
  Answer?: Array<object>;
  Authority?: Array<object>;
  type?: number;
  data?: string;
  TTL?: string;
};

export default class FetchDNS extends Component<{}, State> {
  state: State = {
    typeA1: [],
    typeAAAA28: [],
    typeNS2: [],
    typeSoa6: [],
    typeMx15: [],
    typeTxt16: [],
    record: [],
    domainInput: '',
    showRecordHeader: false,
    noRecordFound: false,
  };

  componentDidMount() {
    updateTextFields();
  }

  _onChangeDomain = (event: string) => {
    this.setState({ domainInput: event });

    if (this.state.domainInput.length <= 1) {
      this.setState({
        typeA1: [],
        typeAAAA28: [],
        typeMx15: [],
        typeNS2: [],
        typeSoa6: [],
        typeTxt16: [],
        showRecordHeader: false,
        noRecordFound: false,
      });
    }
  };

  _onGetDns = (domain: string) => {
    if (validator.isFQDN(domain)) {
      let dnsQuery = `https://dns.google.com/resolve?name=${domain}&type=`;
      /**
       * @dns
       * Record types: | 1 = A record | 2 = NS | 6 = SOA | 15 = MX | 16 = TXT
       */
      let dnsQueryArray: Array<string> = [
        `${dnsQuery}1`,
        `${dnsQuery}2`,
        `${dnsQuery}28`,
        `${dnsQuery}6`,
        `${dnsQuery}15`,
        `${dnsQuery}16`,
      ];

      dnsQueryArray.forEach((dns: string): void => {
        fetch(dns)
          .then(
            (response: Response): Promise<Record> => {
              return response.json();
            }
          )
          .then((json: Record): void => {
            if (json.Answer !== undefined) {
              const defaultResponse: Array<object> = [{ default: 'default' }];

              this.setState({ showRecordHeader: true });

              json.Answer.forEach(
                    (data: Record): void => {
                      let recordState: Array<object> = json.Answer ? json.Answer : defaultResponse;

                      switch (data.type) {
                        case 1:
                          this.setState({ typeA1: recordState });
                          break;
                        case 2:
                          this.setState({ typeNS2: recordState });
                          break;
                        case 28:
                          this.setState({ typeAAAA28: recordState });
                          break;
                        case 6:
                          this.setState({ typeSoa6: recordState });
                          break;
                        case 15:
                          this.setState({ typeMx15: recordState });
                          break;
                        case 16:
                          this.setState({ typeTxt16: recordState });
                          break;
                      }
                    }
                  ); // prettier-ignore
            } else if (
              /* prettier-ignore */
              this.state.typeA1.length + this.state.typeAAAA28.length + this.state.typeMx15.length +
                    this.state.typeNS2.length + this.state.typeSoa6.length + this.state.typeTxt16.length === 0
            ) {
              this.setState({ showRecordHeader: true, noRecordFound: true });
            }
          })
          .catch(err => console.log(err));
      });
    }
  };

  render() {
    return (
      <>
        <Nav />
        <div className="container" id="dns-container">
          <SearchForm
            onClickSubmit={() => this._onGetDns(this.state.domainInput)}
            onChangeInput={event => {
              this._onChangeDomain(event.target.value);
            }}
          />
          <div className="row">
            <div className="col s6 m10 l12">
              <table>
                {this.state.showRecordHeader ? <RecordHeader /> : null}
                <tbody>
                  {this.state.typeSoa6.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle red white-text"
                        chipLabel="S"
                        recordType="SOA"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.typeA1.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle blue white-text"
                        chipLabel="A"
                        recordType="A IPv4"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.typeAAAA28.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle blue white-text"
                        chipLabel="A"
                        recordType="AAAA IPv6"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.typeNS2.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle green white-text"
                        chipLabel="N"
                        recordType="Name Server"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.typeMx15.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle yellow white-text"
                        chipLabel="M"
                        recordType="Mail Exchange"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.typeTxt16.map((record: Record, index: number) => {
                    return (
                      <DnsRecord
                        key={index}
                        chipStyle="chip-circle purple white-text"
                        chipLabel="T"
                        recordType="TXT"
                        dnsData={record.data}
                        TTL={record.TTL}
                      />
                    );
                  })}

                  {this.state.noRecordFound ? (
                    <DnsRecord
                      key={0}
                      chipStyle="chip-circle red white-text"
                      chipLabel="X"
                      recordType="NO RECORD FOUND"
                      dnsData="No DNS entries were returned in this query."
                      TTL="0"
                    />
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
