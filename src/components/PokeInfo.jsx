const PokeInfo = ({pokeData}) => {

    const stats = pokeData.stats;
    const abilities = pokeData.abilities;

    return (
        <>
            <p>#{pokeData.order}</p>
            <p>{pokeData.name}</p>
            <img src={pokeData.sprites.front_default} alt="img" />
            <img src={pokeData.sprites.back_default} alt="img" />
            <div className="abilities">
                {abilities.map((ability) => (
                    <p>{ability.ability.name}</p>
                ))}
            </div>
            <div className="body">
                <p>Height</p>
                <p>{pokeData.height}</p>
                <p>Weight</p>
                <p>{pokeData.weight}</p>
            </div>
            {stats.map((stat) => (
                <div className="stats">
                    <p>{stat.stat.name}</p>
                    <p>{stat.base_stat}</p>
                </div>
            ))}
        </>
    );
}
 
export default PokeInfo;