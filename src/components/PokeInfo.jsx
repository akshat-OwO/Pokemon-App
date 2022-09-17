const PokeInfo = ({pokeData}) => {
    const stats = pokeData.stats;
    const abilities = pokeData.abilities;
    const types = pokeData.types;

    return (
        <>
            <div className="base">
                <div className="name">
                    <p className="order">#{pokeData.order}</p>
                    <p>{pokeData.name}</p>
                </div>
                <div className="types">
                    {types.map((type) => (
                        <p>{type.type.name}</p>
                    ))}
                </div>
            </div>
            <div className="img">
                <img src={pokeData.sprites.front_default} alt="img" />
                <img src={pokeData.sprites.back_default} alt="img" />
            </div>
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