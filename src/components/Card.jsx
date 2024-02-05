import PropTypes from "prop-types"

const Card = (props) => {
    const imageURL = `https://img.pokemondb.net/artwork/large/${props.id}.jpg`;
    return (
        <div className="card" onClick={props.onClick}>
            <img src={imageURL} alt={props.id} />
            <span>{props.id}</span>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card