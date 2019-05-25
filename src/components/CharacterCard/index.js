import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardList from './components/CardList';
import CardNavigation from './components/CardNavigation';
import './CharacterCard.scss';

class CharacterCard extends Component {
  componentWillUnmount() {
    this.props.resetInputValue();
  }

  render() {
    const { param, characters } = this.props;
    return (
      <Fragment>
        <Link
          className="link-card link-back"
          to="/">
          Volver a la lista de personajes
        </Link>

        <CardList
          param={param}
          characters={characters}
        />

        <CardNavigation
          param={param}
          characters={characters}
        />
      </Fragment >
    );
  }
}

export default CharacterCard;