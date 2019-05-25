import React from 'react';
import './App.css';
import fetch, { Response } from 'node-fetch';

// type dnsResponse = Array<object> | string;
type Props = {};
type State = {
	typeA1: any;
	typeNS2: any;
	typeCname5: any;
	typeSoa6: any;
	typeMx15: any;
	typeTxt16: any;
	record: Array<object> | any;
};

interface JSON {
	Answer?: Array<object>;
	type?: number;
	data?: string;
	TTL: string;
}
class App extends React.Component<Props, State> {
	state: State = {
		typeA1: [],
		typeNS2: [],
		typeCname5: [],
		typeSoa6: [],
		typeMx15: [],
		typeTxt16: [],
		record: [],
	};
	// @ts-ignore
	_onGetDns = (domain: string) => {
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
						(response: Response): Promise<any> => {
							return response.json();
						}
					)
					.then((json: JSON) => {
						let answer = json.Answer;
						console.log(answer)
						if (answer !== undefined) {
							answer.map((record: any) => {
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
										console.log('STATE: ', this.state.typeTxt16)
										break;
									default:
										return null;
								}
								return null;
							});
						} else {
							console.log('No record found.');
						}
					})
					.then(() => {
						console.log(this.state.typeTxt16);
					});
			}
		);
	};

	render() {
		return (
			<div>
				<header>
					<button onClick={() => this._onGetDns('google.com')}>Test Button</button>
				</header>
				<div>
					{this.state.typeA1.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
				<div>
					{this.state.typeCname5.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
				<div>
					{this.state.typeMx15.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
				<div>
					{this.state.typeNS2.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
				<div>
					{this.state.typeSoa6.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
				<div>
					{this.state.typeTxt16.map((record: any, index: number) => {
						return <li key={index}>Record: {record.data}  TTL: {record.TTL}</li>;
					})}
				</div>
			</div>
		);
	}
}

export default App;