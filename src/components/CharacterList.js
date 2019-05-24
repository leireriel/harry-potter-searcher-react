import React, { Component } from 'react';

class CharacterList extends Component {
  render() {
    const { characters, inputValue } = this.props;
    return (
      <ol className="list-characters">
        {characters
        .filter(item => item.name.toLowerCase().includes(inputValue))
        .map((item, index) => {
          return (
            <li className="card-character" key={index}>
              <img
                src={item.image}
                alt={item.name}
              />
              <h2 className="name-character">
                {item.name}
              </h2>
              <h3 className="house-character">
                {item.house}
              </h3>
            </li>
          )
        })
        }
      </ol>
    );
  }
}

export default CharacterList;