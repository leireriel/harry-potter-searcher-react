import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './CardDetail.scss';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.houseDetailMatcher = this.houseDetailMatcher.bind(this);
  }

  houseDetailMatcher(house) {
    let classHouse = 'detail-default';
    if (house === 'Gryffindor') {
      return classHouse = 'detail-gryffindor';
    } else if (house === 'Slytherin') {
      return classHouse = 'detail-slytherin';
    } else if (house === 'Ravenclaw') {
      return classHouse = 'detail-ravenclaw';
    } else if (house === 'Hufflepuff') {
      return classHouse = 'detail-hufflepuff';
    }
    return classHouse;
  }

  render() {
    const { param, characters } = this.props;
    const characterSelected =
      characters.find(item => item.id === parseInt(param));

    return (
      <Fragment>

        {characterSelected ?
          <div className="card-list-wrapper">
            <ol className={`list-card ${this.houseDetailMatcher(characterSelected.house)}`}>
              <img
                className="img-card"
                src={characterSelected.image}
                alt={characterSelected.name}
              />
              <div className="data-card">
                {characterSelected.name ?
                  <li className="name-card">
                    {characterSelected.name}
                  </li>
                  :
                  null
                }
                {characterSelected.hogwartsStaff ?
                  <li className="category-card">
                    <small>{'Emplead@ en Hogwarts'}</small>
                  </li>
                  :
                  null
                }
                {characterSelected.hogwartsStudent ?
                  <li className="category-card">
                    <small>{'Estudiante'}</small>
                  </li>
                  :
                  null
                }
                {characterSelected.house ?
                  <li className="house-card">
                    Casa: {characterSelected.house}
                  </li>
                  :
                  null
                }
                {characterSelected.patronus ?
                  <li className="patronus-card">
                    Patronus: {characterSelected.patronus}
                  </li>
                  : null
                }
                {characterSelected.yearOfBirth ?
                  <li className="birth-card">
                    Nació en {characterSelected.yearOfBirth}
                  </li>
                  :
                  null
                }
                {characterSelected.alive !== undefined &&
                  <li className="alive-card">
                    {characterSelected.alive ? '¡Está viv@!'
                      :
                      'RIP :('
                    }
                  </li>
                }
                {characterSelected.wand.core ?
                  <li>{characterSelected.wand.core}</li>
                  :
                  null
                }
              </div>
            </ol>
          </div>
          :
          <p>Cargando...</p>
        }

      </Fragment >
    );
  }
}

CardDetail.propTypes = {
  param: PropTypes.number,
  characters: PropTypes.array,
};

export default CardDetail;