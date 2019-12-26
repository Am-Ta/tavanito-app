import React from "react";

const Button = ({ type, value, icon, handleClick }) => {
    return (
        <button
            type={type}
            className="btn btn_primary btn_block"
            onClick={handleClick}
        >
            {icon} {value}
        </button>
    );
};

export default Button;
