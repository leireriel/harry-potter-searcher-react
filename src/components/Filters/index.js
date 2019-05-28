import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends Component {
  render() {
    const { action, ancestry, studentOrStaff, studentValue } = this.props;
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

        <label htmlFor="ancestry">Ancestry</label>
        <select name="" id="ancestry" onChange={ancestry}>
          <option value="muggleborn">Muggleborn</option>
          <option value="half-blood">Half-blood</option>
          <option value="pure-blood">Pure-blood</option>
        </select>

        <label htmlFor="student">Student
        <input type="radio" id="student" value="student" onChange={studentOrStaff}
            checked={`${studentValue === 'student' ? true : false}`}
          />
        </label>
        <label htmlFor="staff">Staff
        <input type="radio" id="staff" value="staff" onChange={studentOrStaff}
            checked={`${studentValue === 'staff' ? true : false}`}
          />
        </label>
      </form>
    );
  }
}

Filters.propTypes = {
  action: PropTypes.func,
};

export default Filters;