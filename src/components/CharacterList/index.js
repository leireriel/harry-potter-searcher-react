import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.scss';

class CharacterList extends Component {
  render() {
    const { characters, inputValue } = this.props;
    return (
      <ol className="list-characters">
        {characters
          .filter(item => item.name.toLowerCase().includes(inputValue))
          .map(item => {
            return (
              <li
                className={`card-character ${item.house === 'Gryffindor' ? 'card-gryffindor'
                  :
                  item.house === 'Slytherin' ? 'card-slytherin'
                    :
                    item.house === 'Ravenclaw' ? 'card-ravenclaw'
                      :
                      'card-hufflepuff'
                  }`}
                key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <img
                    className="img-character"
                    src={item.image}
                    alt={item.name}
                  />
                  <small>ver detalle</small>
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