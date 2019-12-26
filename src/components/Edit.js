import React, { useState, useEffect } from "react";

import Input from "./form/Input";
import Button from "./form/Button";

import { connect } from "react-redux";
import { updateUser } from "../actions/authActions";

const Edit = ({ current, updateUser }) => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    useEffect(() => {
        if (current) {
            setUser({ ...current });
        }
    }, [current]);

    const handleChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        };

        updateUser(newUser);
    };

    return (
        current && (
            <div className="edit">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__item">
                        <Input
                            type="text"
                            handleChange={handleChange}
                            name="first_name"
                            value={user.first_name}
                            labelText="First Name:"
                        />
                    </div>
                    <div className="form__item">
                        <Input
                            type="text"
                            handleChange={handleChange}
                            name="last_name"
                            value={user.last_name}
                            labelText="Last Name:"
                        />
                    </div>
                    <div className="form__item">
                        <Input
                            type="email"
                            handleChange={handleChange}
                            name="email"
                            value={user.email}
                            labelText="Email:"
                        />
                    </div>
                    <Button
                        type="submit"
                        value="Edit"
                        icon={<i className="fas fa-check"></i>}
                    />
                </form>
            </div>
        )
    );
};

const mapStateToProps = state => ({
    current: state.auth.current
});

export default connect(mapStateToProps, { updateUser })(Edit);
