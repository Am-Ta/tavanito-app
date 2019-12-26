import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, value, handleChange, labelText }) => {
    return (
        <Fragment>
            <label>{labelText}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="form__input"
            />
        </Fragment>
    );
};

// To validate props
Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func
};

export default Input;
