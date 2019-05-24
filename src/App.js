import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Header from './components/Header/index';
import Filters from './components/Filters/index';
import CharacterList from './components/CharacterList/index';
import CharacterCard from './components/CharacterCard/index';
import Footer from './components/Footer/index';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      inputValue: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);
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

  resetInputValue() {
    this.setState({
      inputValue: ''
    })
  }

  render() {
    const { characters, inputValue } = this.state;
    return (
      <Fragment>
        <Header/>
        <main>
          <Switch>

            <Route exact path="/" render={() =>
              <div className="home-page">
                <Filters
                  action={this.handleInputChange}
                />
                <CharacterList
                  characters={characters}
                  inputValue={inputValue}
                />
              </div>
            } />

            <Route path="/detail/:character" render={paramPicker =>
              <CharacterCard
                param={paramPicker.match.params.character}
                characters={characters}
                resetInputValue={this.resetInputValue}
              />
            } />

          </Switch>
        </main>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
