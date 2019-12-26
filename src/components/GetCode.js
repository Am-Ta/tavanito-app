import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./form/Input";
import Button from "./form/Button";
import Card from "./Card";

import { connect } from "react-redux";
import { getOTPCode } from "../actions/authActions";

const GetCode = ({ code, getOTPCode }) => {
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        getOTPCode(value);
        setValue("");
    };

    return (
        <div className="getCode">
            {!code && (
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__item">
                        <Input
                            type="tel"
                            handleChange={handleChange}
                            value={value}
                            labelText="Please enter the mobile number"
                        />
                    </div>
                    <Button
                        type="submit"
                        value="Get Code"
                        icon={<i className="fas fa-check"></i>}
                    />
                </form>
            )}
            {code && <Card message={code} />}
        </div>
    );
};

GetCode.propTypes = {
    code: PropTypes.string,
    getOTPCode: PropTypes.func
};

const mapStateToProps = state => ({
    code: state.auth.code
});

export default connect(mapStateToProps, { getOTPCode })(GetCode);
