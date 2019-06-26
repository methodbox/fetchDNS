import * as React from 'react';

type Props = {
  key: number;
  chipStyle: any;
  chipLabel: string;
  recordType: string;
  dnsData: any;
  TTL: string | undefined;
};
const DnsRecord = (props: Props) => {
  return (
    <tr key={props.key} className="collection-item">
      <td className="chip-td center-align">
        <div className="chip">
          <div className={props.chipStyle}>{props.chipLabel}</div>
          {props.recordType}
        </div>
      </td>
      <td className="left td-align">{props.dnsData}</td>
      <td className="left-align">{props.TTL}</td>
    </tr>
  );
};

export default DnsRecord;
