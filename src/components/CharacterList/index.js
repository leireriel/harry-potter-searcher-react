import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterList.scss';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.houseStylesMatcher = this.houseStylesMatcher.bind(this);
  }

  houseStylesMatcher(house) {
    let classHouse = 'card-default';
    if (house === 'Gryffindor') {
      return classHouse = 'card-gryffindor';
    } else if (house === 'Slytherin') {
      return classHouse = 'card-slytherin';
    } else if (house === 'Ravenclaw') {
      return classHouse = 'card-ravenclaw';
    } else if (house === 'Hufflepuff') {
      return classHouse = 'card-hufflepuff';
    }
    return classHouse;
  }

  render() {
    const { characters, inputValue, ancestryValue, studentValue } = this.props;
    const paintCharacters =
      characters
        .filter(item => item.name.toLowerCase().includes(inputValue) ||
          item.house.toLowerCase().includes(inputValue))
        .filter(item => item.ancestry.toLowerCase().includes(ancestryValue))
        .filter(item => studentValue === 'student' ? item.hogwartsStudent
          :
          studentValue === 'staff' ? item.hogwartsStaff
            :
            item
        )
        .map(item => {
          return (
            <li
              className={`card-character ${this.houseStylesMatcher(item.house)}`}
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
                <h4>
                  {item.wand.wood}
                </h4>
              </Link>
            </li>
          )
        });
    return (
      <ol className="list-characters">
        {paintCharacters.length === 0 && inputValue !== '' ?
          <li className="try-again">Prueba otra vez ;&#41;</li>
          :
          paintCharacters
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