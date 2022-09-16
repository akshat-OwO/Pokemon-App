import { useState } from "react";

const PokeDexForm = () => {
    const [name, setName] = useState('');
    const [pokeData, setPokeData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
                .then((response) => response.json())
                .then((data) => {setPokeData(data)});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Pokemon Name</label>
            <input 
                type="text" 
                id="name" 
                required 
                onInput={(e) => setName(e.target.value)}
                value={name}
            />
            <button type="submit">Go</button>
            {pokeData && (
                <>
                    <p>{pokeData.name}</p>
                    <img src={pokeData.sprites.front_default} alt="img" />
                    <img src={pokeData.sprites.back_default} alt="img" />
                </>
            )}
        </form>
    );
}
 
export default PokeDexForm;