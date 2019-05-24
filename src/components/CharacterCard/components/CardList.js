import React, { Component, Fragment } from 'react';

class CardList extends Component {
  render() {
    const { param, characters } = this.props;
    const characterSelected =
      characters.find(item => item.id === parseInt(param));

    return (
      <Fragment>

        {characterSelected ?
          <ol className="list-card">
            <img
              className="img-card"
              src={characterSelected.image}
              alt={characterSelected.name}
            />
            <div className="data-card">
              <li className="name-card">
                {characterSelected.name}
              </li>
              <li className="house-card">
                Casa: {characterSelected.house}
              </li>
              <li className="birth-card">
                Nacimiento: {characterSelected.yearOfBirth}
              </li>
              {characterSelected.hogwartsStaff ?
                <li className="category-card">
                  Categoría: {'Emplead@ en Hogwarts'}
                </li>
                :
                characterSelected.hogwartsStudent ?
                  <li className="category-card">
                    Categoría: {'Estudiante'}
                  </li>
                  :
                  null
              }
              <li className="patronus-card">
                Patronus: {characterSelected.patronus}
              </li>
              <li className="alive-card">
                Estado: {`${characterSelected.alive}` ? '¡Está viv@!'
                  :
                  'RIP'}
              </li>
            </div>
          </ol>
          :
          <p>Cargando...</p>
        }

      </Fragment >
    );
  }
}

export default CardList;