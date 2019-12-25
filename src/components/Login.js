import React, { useState } from "react";

import Input from "./form/Input";
import Button from "./form/Button";

import { connect } from "react-redux";
import { loginWithOTP } from "../actions/userInfoAction";

const Login = ({ code, mobile, loginWithOTP }) => {
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        loginWithOTP(mobile, value);
        setValue("");
    };

    return (
        <div className="login">
            {code && (
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
    code: state.userInfo.code,
    mobile: state.userInfo.mobile
});

export default connect(mapStateToProps, { loginWithOTP })(Login);
