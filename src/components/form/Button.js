import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, value, icon, handleClick, className }) => {
    return (
        <button type={type} className={className} onClick={handleClick}>
            {icon} {value}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    handleClick: PropTypes.func,
    icon: PropTypes.object,
    className: PropTypes.string
};

export default Button;
