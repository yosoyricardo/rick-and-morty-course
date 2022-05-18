import imageRickMorty from './img/rick-morty.png';
import {useState} from 'react';
import './App.css';
import Characters from './Components/Characters';

function App() {
  const restApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  const [characters, setCharacters] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={restApi} class="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
