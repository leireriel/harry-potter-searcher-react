const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';

const fetchCharacters = () => fetch(ENDPOINT).then(res => res.json())

export {fetchCharacters};