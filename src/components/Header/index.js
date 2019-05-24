import React, { Component } from 'react';
import './Header.scss';
import Logo from './images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title-hogwarts">
          <div>
            <img
              className="title-logo"
              src={Logo}
              alt="Harry Potter"
            />
          </div>
          <span className="title-finder">
            finder
          </span>
        </h1>
      </header>
    );
  }
}

export default Header;