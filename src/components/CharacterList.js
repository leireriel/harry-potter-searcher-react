import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
  render() {
    const { characters, inputValue } = this.props;
    return (
      <ol className="list-characters">
        {characters
          .filter(item => item.name.toLowerCase().includes(inputValue))
          .map(item => {
            return (
              <li className="card-character" key={item.id}>
                <Link to={`/detail/${item.id}`}>
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
                </Link>
              </li>
            )
          })
        }
      </ol>
    );
  }
}

export default CharacterList;