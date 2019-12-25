import React from "react";

const Button = ({ type, value, icon }) => {
    return (
        <button type={type} className="btn btn_primary btn_block">
            {icon} {value}
        </button>
    );
};

export default Button;
