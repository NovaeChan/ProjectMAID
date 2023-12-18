import PropTypes from 'prop-types';

import '../style/components/__Card.css';

function Card({title, content, className}) {
    return (
        <div className={`card-wrapper ${className}`}>
            <h2 className='card-title'>{title}</h2>
            {/* Condition if card has an image */}
            <div className="card-desc">
                <span>{content}</span>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string
};

export default Card;