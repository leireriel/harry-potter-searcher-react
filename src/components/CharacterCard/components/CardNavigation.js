import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardNavigation.scss';

class CardNavigation extends Component {
  render() {
    const { param } = this.props;
    const previuosCharacter = param - 1;
    const nextCharacter = param + 1;
    const currentCharacter = param + 1;

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
            <Link
              className="link-card"
              to={`/detail/${characters.length-1}`}>
              Avanzar al {characters.length}
            </Link>
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
            <Link
              className="link-card"
              to={`/detail/${0}`}>
              Volver al 1
            </Link>
          }
        </nav>
      </div>
    );
  }
}

CardNavigation.propTypes = {
  param: PropTypes.number,
  characters: PropTypes.array,
};

export default CardNavigation;