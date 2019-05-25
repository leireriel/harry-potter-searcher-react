import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-thanks">
            ¡Gracias por tu visita!
          </li>
          <li className="footer-github">
            <p className="github-text">
              Puedes ver más repos chachis aquí
            </p>
            <a
              className="github-link"
              href="https://github.com/leireriel">
              <i className="fab fa-github"></i>
              <span> </span>
              github.com/leireriel
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;