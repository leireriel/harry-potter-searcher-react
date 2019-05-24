import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import CardNavigation from './CardNavigation';

class CharacterCard extends Component {
  render() {
    const { param, characters } = this.props;
    const characterSelected =
      characters.find(item => item.id === parseInt(param));

    return (
      <Fragment>
        <Link to="/">Volver a la lista de personajes</Link>

        {characterSelected ?
          <ol className="list-card">
            <li className="name-card">
              {characterSelected.name}
            </li>
            <li className="house-card">
              Casa: {characterSelected.house}
            </li>
            <li className="birth-card">
              Nacimiento: {characterSelected.yearOfBirth}
            </li>
            {`${characterSelected.hogwartsStaff}` ?
              <li className="category-card">
                Categoría: {'Empleado en Hogwarts'}
              </li>
              :
              null
            }
            {`${characterSelected.hogwartsStudent}` ?
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
              Estado:{`${characterSelected.alive}` ? 'VIVO'
                :
                'RIP'}
            </li>
          </ol>
          :
          <p>Cargando...</p>
        }

        {/* <CardNavigation
          param={param}
          characters={characters}
        /> */}
      </Fragment >
    );
  }
}

export default CharacterCard;