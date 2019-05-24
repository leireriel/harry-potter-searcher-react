import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      inputValue: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      });
  }

  handleInputChange(event) {
    const triggerValue = event.currentTarget.value.toLowerCase();
    this.setState({
      inputValue: triggerValue
    })
  }

  render() {
    const { characters, inputValue } = this.state;
    return (
      <Fragment>
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
            placeholder="hermione"
            onChange={this.handleInputChange}
          />
        </form>
        <CharacterList
          characters={characters}
          inputValue={inputValue}
        />
      </Fragment>
    );
  }
}

export default App;
