import { useState, useEffect} from "react";
import Card from "./Card";
import PropTypes from "prop-types"

export default function Game(props) {
    const [pokemonCards, setPokemonCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
            const data = await response.json();
            setPokemonCards(shuffleCards(data.results));
          } catch (error) {
            console.error('Failed to fetch Pokémon:', error);
          }
        };
      
        fetchPokemon();
      }, []);

    function shuffleCards(array) {
        let currentIndex = array.length, randomIndex;
        
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random( ) * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const handleCardClick = (id) => {
        if (selectedCards.includes(id)) {
            props.handleReset()
            setSelectedCards([])
        } else {
            props.setScore((prevScore) => prevScore + 1);
            setSelectedCards([ ... selectedCards, id]);
            setPokemonCards(shuffleCards(pokemonCards));
        }
    }

    return (
        <div className="game">
            {pokemonCards.map((pokemon) => (
                <Card key={pokemon.name} id={pokemon.name} onClick={() => handleCardClick(pokemon.name)} />
            ))}
        </div>
    )
}

Game.propTypes = {
    handleReset: PropTypes.func,
    setScore: PropTypes.func,
}