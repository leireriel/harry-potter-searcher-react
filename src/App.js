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
          return {...item, id: (index)};
        });

        this.setState ({
          characters: finalData
        })
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title-hogwarts">Welcome to Hogwarts</h1>
        <ol className="list-characters">

        </ol>
      </React.Fragment>
    );
  }
}

export default App;
