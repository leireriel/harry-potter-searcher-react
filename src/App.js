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
      inputValue: '',
      ancestryValue: '',
      studentValue: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetInputValue = this.resetInputValue.bind(this);
    this.getAncestry = this.getAncestry.bind(this);
    this.getStudentOrStaff = this.getStudentOrStaff.bind(this);
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

  getAncestry(event) {
    const triggerAncestry = event.currentTarget.value;
    this.setState({
      ancestryValue: triggerAncestry
    })
  }
  
  getStudentOrStaff(event) {
    const triggerStudent = event.currentTarget.value;
    this.setState({
      studentValue: triggerStudent
    })
    console.log(triggerStudent)
  }

  render() {
    const { characters, inputValue, ancestryValue, studentValue } = this.state;
    return (
      <Fragment>
        <Header/>
        <main className="main">
          <Switch>

            <Route exact path="/" render={() =>
              <Fragment>
                <Filters
                  action={this.handleInputChange}
                  ancestry={this.getAncestry}
                  studentOrStaff={this.getStudentOrStaff}
                  studentValue={studentValue}
                />
                <CharacterList
                  characters={characters}
                  inputValue={inputValue}
                  ancestryValue={ancestryValue}
                  studentValue={studentValue}
                />
              </Fragment>
            } />

            <Route path="/detail/:character" render={paramPicker =>
              <CharacterCard
                param={parseInt(paramPicker.match.params.character)}
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
