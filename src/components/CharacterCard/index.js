import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import CardNavigation from './components/CardNavigation';
import PropTypes from 'prop-types';
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

        <CardDetail
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

CharacterCard.propTypes = {
  resetInputValue: PropTypes.func,
  param: PropTypes.number,
  characters: PropTypes.array,
};

export default CharacterCard;