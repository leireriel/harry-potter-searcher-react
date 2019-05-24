import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardNavigation from './CardNavigation';

class CharacterCard extends Component {
  render() {
    const { param, characters } = this.props;

    return (
      <Fragment>
        <Link to="/">Volver a la lista de personajes</Link>
        <p>hola card {param}</p>
        
        <CardNavigation
          param={param}
          characters={characters}
        />
      </Fragment>
    );
  }
}

export default CharacterCard;