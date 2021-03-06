import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./form/Input";
import Button from "./form/Button";

import { connect } from "react-redux";
import { loginWithOTP } from "../actions/authActions";

const Login = ({ mobile, user, loginWithOTP }) => {
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        const user = { mobile, value };

        loginWithOTP(user);
        setValue("");
    };

    return (
        !user && (
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
                            className="btn btn_primary"
                        />
                    </form>
                )}
            </div>
        )
    );
};

Login.propTypes = {
    mobile: PropTypes.string,
    user: PropTypes.object,
    loginWithOTP: PropTypes.func
};

const mapStateToProps = state => ({
    mobile: state.auth.mobile,
    user: state.auth.user
});

export default connect(mapStateToProps, { loginWithOTP })(Login);
