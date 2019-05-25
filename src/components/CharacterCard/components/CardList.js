import React, { Component, Fragment } from 'react';
import './CardList.scss';

class CardList extends Component {
  render() {
    const { param, characters } = this.props;
    const characterSelected =
      characters.find(item => item.id === parseInt(param));

    return (
      <Fragment>

        {characterSelected ?
          <div className="card-list-wrapper">
            <ol className={`list-card ${characterSelected.house === 'Gryffindor' ? 'detail-gryffindor'
              :
              characterSelected.house === 'Slytherin' ? 'detail-slytherin'
                :
                characterSelected.house === 'Ravenclaw' ? 'detail-ravenclaw'
                  :
                  'detail-hufflepuff'
              }`}>
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

export default CardList;