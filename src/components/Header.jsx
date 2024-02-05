import PropTypes from 'prop-types';
    
export default function Header(props) {
    return (
        <div className='header'>
            <div className="left-side-header">
                <h2>Memory Game</h2>
            </div>
            <div className="right-side-header">
                <span>Score: {props.score}  </span>
                <span>Best Score: { props.bestScore }</span>
            </div>
        </div>
    )
}

Header.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number,
}