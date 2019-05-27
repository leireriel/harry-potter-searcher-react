import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends Component {
  render() {
    const { action } = this.props;
    return (
      <form
        action=""
        className="form-search"
      >
        <label
          htmlFor="characters-finder"
          className="label-search"
        >
          Look for your favourite character or house
        </label>
        <input
          type="text"
          id="characters-finder"
          placeholder="Look for character or house"
          className="input-search"
          onChange={action}
        />
      </form>
    );
  }
}

Filters.propTypes = {
  action: PropTypes.func,
};

export default Filters;