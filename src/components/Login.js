import React, { useState } from "react";

import Input from "./form/Input";
import Button from "./form/Button";

import { connect } from "react-redux";
import { loginWithOTP } from "../actions/authActions";

const Login = ({ mobile, loginWithOTP }) => {
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        const user = { mobile, value };

        loginWithOTP(user);
        setValue("");
    };

    return (
        <div className="login">
            {mobile && (
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__item">
                        <Input
                            type="tel"
                            handleChange={handleChange}
                            value={value}
                            labelText="Please enter the code:"
                        />
                    </div>
                    <Button
                        type="submit"
                        value="Login"
                        icon={<i className="fas fa-check"></i>}
                    />
                </form>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    code: state.auth.code,
    mobile: state.auth.mobile
});

export default connect(mapStateToProps, { loginWithOTP })(Login);
