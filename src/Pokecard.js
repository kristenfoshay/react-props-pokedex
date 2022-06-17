

function Pokecard(props){
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return <div className="pokecard">
        <p className="pokename">{props.name}</p>
        <p><img src={imageSource}/></p>
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>
    </div>
}

export default Pokecard;