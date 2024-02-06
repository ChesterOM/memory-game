import PropTypes from "prop-types"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const Card = (props) => {
    const imageURL = `https://img.pokemondb.net/artwork/large/${props.id}.jpg`;
    const displayName = capitalizeFirstLetter(props.id)
    
    return (
        <div className="card" onClick={props.onClick}>
            <img src={imageURL} alt={displayName} />
            <span>{displayName}</span>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card