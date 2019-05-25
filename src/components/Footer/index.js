import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer-list">
          <li>¡Gracias por tu visita!</li>
          <li>
            <i className="fas fa-heart"></i>
          </li>
          <li>
            <p>Puedes ver más repos chachis aquí</p>
            <i className="fab fa-github"></i>
            <a href="https://github.com/leireriel">github.com/leireriel</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;