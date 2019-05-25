import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CardNavigation.scss';

class CardNavigation extends Component {
  render() {
    const { param } = this.props;
    const previuosCharacter = parseInt(param) - 1;
    const nextCharacter = parseInt(param) + 1;
    const currentCharacter = parseInt(param) + 1;

    const { characters } = this.props;

    return (
      <div className="nav-wrapper">
        <nav className="nav-card">
          {param > 0 ?
            <Link
              className="link-card"
              to={`/detail/${previuosCharacter}`}>
              Ver anterior
          </Link>
            :
            <p className="info-card">
              Este es el primer personaje
          </p>
          }
          <p className="info-card">
            Estás viendo al personaje {currentCharacter} de {characters.length}
          </p>
          {param < 24 ?
            <Link
              className="link-card"
              to={`/detail/${nextCharacter}`}>
              Ver siguiente
          </Link>
            :
            <p className="info-card">
              Este es el último personaje
          </p>
          }
        </nav>
      </div>
    );
  }
}

export default CardNavigation;