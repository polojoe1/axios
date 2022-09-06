
import './App.css';
import {useState} from "react";
import axios from "axios";


function App() {
  const [pokemon, setPokemon]=useState([]);
  const fetchAxios=()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response=>setPokemon(response.data.results))
  }
  return (
    <div className="App">
      <h1>Pokemon Api with Axios</h1>
      <button onClick={fetchAxios}>Fetch with axios</button>
      <ul>
        {
          pokemon.map((el,i)=>{
            return <li key={i}>{el.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
