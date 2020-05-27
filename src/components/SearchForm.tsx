import React, { ChangeEvent } from 'react';

interface Props {
  onChangeInput: (domainInputValue: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}

export default function SearchForm(props: Props): JSX.Element {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <div className="row">
        <div className="col s10 offset-s1 m6 l4 offset-m3 offset-l4">
          <div className="input-field" id="domain-input">
            <input
              onChange={props.onChangeInput}
              id="domain-name"
              type="text"
              name="domain-name"
              className="validate"
            />
            <label htmlFor="domain-name">Domain Name</label>
          </div>
        </div>
        <div className="col s2 hide-on-med-and-down">
          <button onClick={props.onClickSubmit} id="submit-btn" className="waves-effect waves-light btn btn-purple">
            Fetch DNS<i className="material-icons right dns-icon">dns</i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s6 offset-s4 m3 offset-m5 hide-on-large-only">
          <button onClick={props.onClickSubmit} id="submit-btn" className="waves-effect waves-light btn btn-purple">
            Fetch DNS<i className="material-icons right dns-icon">dns</i>
          </button>
        </div>
      </div>
    </form>
  );
}
