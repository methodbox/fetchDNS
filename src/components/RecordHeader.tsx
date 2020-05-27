import * as React from 'react';
/**
 * returns a stylized stateless React table header component
 */
const RecordHeader = (): JSX.Element => {
  return (
    <thead>
      <tr>
        <th className="chip-td center-align">Record Type</th>
        <th className="record-th">Record</th>
        <th className="left-align">TTL</th>
      </tr>
    </thead>
  );
};

export default RecordHeader;
