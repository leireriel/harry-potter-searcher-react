import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }

    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        const finalData = data.map((item, index) => {
          return { ...item, id: (index) };
        });

        this.setState({
          characters: finalData
        });
        console.log(finalData)
      });
  }

  render() {
    const { characters } = this.state;
    return (
      <React.Fragment>
        <h1 className="title-hogwarts">
          Welcome to Hogwarts
        </h1>
        <form action="">
          <label htmlFor="characters-finder">
            Look for your favourite character
          </label>
          <input
            type="text"
            id="characters-finder"
          />
        </form>
        <ol className="list-characters">
          {characters.map((item, index) => {
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
      </React.Fragment>
    );
  }
}

export default App;
