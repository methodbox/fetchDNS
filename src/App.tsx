import React, { Component } from 'react';
import './App.css';
import fetch, { Response } from 'node-fetch';
import { updateTextFields } from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './Dns.css';

export type Props = {};
export type State = {
  typeA1: any;
  typeNS2: any;
  typeCname5: any;
  typeSoa6: any;
  typeMx15: any;
  typeTxt16: any;
  record: Array<object> | any;
  domainInput: string;
};

export type Record = {
  type?: number;
  data?: string;
  TTL?: string;
};
export interface JSON {
  Answer?: Array<object>;
  type?: number;
  data?: string;
  TTL?: string;
}
export default class FetchDNS extends Component<Props, State> {
  state: State = {
    typeA1: [],
    typeNS2: [],
    typeCname5: [],
    typeSoa6: [],
    typeMx15: [],
    typeTxt16: [],
    record: [],
    domainInput: '',
  };

  componentDidMount() {
    updateTextFields();
  }

  _onChangeDomain = (event: string) => {
    this.setState({ domainInput: event });
    console.log(this.state.domainInput);
  };
  _onGetDns = (domain: string | null) => {
    let dnsQuery = `https://dns.google.com/resolve?name=${domain}&type=`;
    /**
     * @dns
     * Record types: | 1 = A record | 2 = NS | 6 = SOA | 15 = MX | 16 = TXT
     */
    let dnsQueryArray: Array<string> = [
      `${dnsQuery}1`,
      `${dnsQuery}2`,
      `${dnsQuery}6`,
      `${dnsQuery}15`,
      `${dnsQuery}16`,
    ];

    dnsQueryArray.forEach(
      (dns: string): void => {
        fetch(dns)
          .then(
            (response: Response): Promise<JSON> => {
              return response.json();
            }
          )
          .then((json: JSON) => {
            let answer = json.Answer;
            console.log(answer);
            if (answer !== undefined) {
              answer.forEach(
                (record: Record): void => {
                  switch (record.type) {
                    case 1:
                      this.setState({ typeA1: json.Answer });
                      break;
                    case 2:
                      this.setState({ typeNS2: json.Answer });
                      break;
                    case 5:
                      this.setState({ typeCname5: json.Answer });
                      break;
                    case 6:
                      this.setState({ typeSoa6: json.Answer });
                      break;
                    case 15:
                      this.setState({ typeMx15: json.Answer });
                      break;
                    case 16:
                      this.setState({ typeTxt16: json.Answer });
                      console.log('STATE: ', this.state.typeTxt16);
                      break;
                  }
                }
              );
            } else {
              console.log('No record found.');
            }
          })
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    return (
      <div className="container" id="dns-container">
        <form onSubmit={event => event.preventDefault()}>
          <div className="row">
            <div className="col s4">
              <div className="input-field">
                <input
                  onChange={event => {
                    this._onChangeDomain(event.target.value);
                  }}
                  id="domain-name"
                  type="text"
                  name="domain-name"
                  className="validate"
                />
                <label htmlFor="domain-name">Domain Name</label>
              </div>
            </div>
            <div className="col s3">
              <button
                onClick={() => this._onGetDns(this.state.domainInput)}
                id="submit-btn"
                className="waves-effect waves-light btn"
              >
                button
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="chip">
              <div className="chip-circle">A</div>
              Label Name
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s10">
            <ul className="collection with-header">
              <li className="collection-header">
                <ul id="dns-labels" className="right">
                  <li>left</li>
                  <li>right</li>
                  <li>more right</li>
                </ul>
              </li>
              {this.state.typeA1.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}

              {this.state.typeCname5.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}

              {this.state.typeMx15.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}

              {this.state.typeNS2.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}

              {this.state.typeSoa6.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}

              {this.state.typeTxt16.map((record: Record, index: number) => {
                return (
                  <li key={index} className="collection-item">
                    Record: {record.data} TTL: {record.TTL}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}