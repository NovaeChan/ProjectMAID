import PropTypes from 'prop-types';

import '../style/components/__Card.css';

function Card({title, content}) {
    return (
        <div className="card-wrapper">
            <h2 className='card-title'>{title}</h2>
            <div className="card-desc">
                <span>{content}</span>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default Card;