import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Header from './components/Header';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

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
        <Header />
        <Filters
          action={this.handleInputChange}
        />
        <CharacterList
          characters={characters}
          inputValue={inputValue}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
