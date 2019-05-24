import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Header from './components/Header';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

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
        <main>
          <Switch>

            <Route exact path="/" render={() =>
              <Fragment>
                <Filters
                  action={this.handleInputChange}
                />
                <CharacterList
                  characters={characters}
                  inputValue={inputValue}
                />
              </Fragment>
            } />

            <Route path="/detail/:character" render={(paramPicker) =>
              <CharacterCard
                param={paramPicker.match.params.character}
                characters={characters}
              />
            } />

          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
