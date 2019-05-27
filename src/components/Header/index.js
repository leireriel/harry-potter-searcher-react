import React, { Component } from 'react';
import Logo from './images/logo.png';
import Hedwig from './images/hedwig.png';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title-hogwarts">
          <img
            className="title-logo"
            src={Logo}
            alt="Harry Potter"
          />
          <span className="title-finder">
            finder
          </span>
          <img
            className="hedwig"
            src={Hedwig}
            alt="Hedwig eyes"
          />
        </h1>
      </header>
    );
  }
}

export default Header;