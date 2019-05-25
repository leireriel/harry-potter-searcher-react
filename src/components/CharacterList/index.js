import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.scss';
import PropTypes from 'prop-types';

class CharacterList extends Component {
  render() {
    const { characters, inputValue } = this.props;
    return (
      <ol className="list-characters">
        {characters
          .filter(item => item.name.toLowerCase().includes(inputValue) ||
            item.house.toLowerCase().includes(inputValue))
          .map(item => {
            return (
              <li
                className={`card-character ${item.house === 'Gryffindor' ? 'card-gryffindor'
                  :
                  item.house === 'Slytherin' ? 'card-slytherin'
                    :
                    item.house === 'Ravenclaw' ? 'card-ravenclaw'
                      :
                      item.house === 'Hufflepuff' ? 'card-hufflepuff'
                        :
                        'card-default'
                  }`}
                key={item.id}>
                <Link
                  className="link-character"
                  to={`/detail/${item.id}`}>
                  <div className="img-wrapper-character">
                    <img
                      className="img-character"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <small className="detail-character">
                    ver detalle
                  </small>
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

CharacterList.propTypes = {
  characters: PropTypes.array,
  inputValue: PropTypes.string,
};

export default CharacterList;