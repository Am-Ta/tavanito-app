import React from "react";
import PropTypes from "prop-types";

const Card = ({ message }) => {
    return (
        <div className="card">
            <p className="card__des">{message}</p>
        </div>
    );
};

Card.propTypes = {
    message: PropTypes.string
};

export default Card;
