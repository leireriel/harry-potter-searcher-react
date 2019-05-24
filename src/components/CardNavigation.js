import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardNavigation extends Component {
  render() {
    const { param } = this.props;
    const previuosCharacter = parseInt(param) - 1;
    const nextCharacter = parseInt(param) + 1;
    const currentCharacter = parseInt(param) + 1;

    const { characters } = this.props;

    return (
      <nav>
        {param > 0 ?
          <Link to={`/detail/${previuosCharacter}`}>Ver anterior</Link>
          :
          <p>Este es el primer personaje</p>
        }
        <p>Estás viendo al personaje {currentCharacter} de {characters.length}</p>
        {param < 24 ?
          <Link to={`/detail/${nextCharacter}`}>Ver siguiente</Link>
          :
          <p>Este es el último personaje</p>
        }
      </nav>
    );
  }
}

export default CardNavigation;