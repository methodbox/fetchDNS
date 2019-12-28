import React from 'react';
const gitLogo = require('../assets/GitHub-Mark-64px.png');

export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <h1 className="black-text" id="fetch-logo">
          FETCHDNS
        </h1>
        <div className="version hide-on-med-and-down">v2.0.1</div>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="https://github.com/methodbox/fetchDNS" className="git-link waves-effect waves-light">
              <img src={gitLogo} alt="github logo" className="git-image" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
