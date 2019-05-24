import React, { Component } from 'react';

class Filters extends Component {
  render() {
    const { action } = this.props;
    return (
      <form action="">
        <label htmlFor="characters-finder">
          Look for your favourite character
        </label>
        <input
          type="text"
          id="characters-finder"
          placeholder="hermione"
          onChange={action}
        />
      </form>
    );
  }
}

export default Filters;