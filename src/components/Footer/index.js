import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>¡Gracias por tu visita!</p>
        <i className="fas fa-heart"></i>
        <p>Puedes ver más repos chachis aquí</p>
        <i className="fab fa-github"></i>
        <a href="https://github.com/leireriel">github.com/leireriel</a>
      </footer>
    );
  }
}

export default Footer;