import React, { useEffect } from "react";

import { connect } from "react-redux";
import { loadUser, setCurrent } from "../actions/authActions";
import Button from "./form/Button";

const UserInfo = ({ isAuthenticated, user, current, loadUser, setCurrent }) => {
    useEffect(() => {
        if (isAuthenticated) {
            loadUser();
        }
    }, [isAuthenticated]);

    const handleClick = () => {
        const oldUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        };
        setCurrent(oldUser);
    };

    return (
        user &&
        !current && (
            <div className="info">
                {user.first_name !== "" && (
                    <p className="info__des">
                        <strong>Firstname:</strong> {user.first_name}
                    </p>
                )}
                {user.last_name !== "" && (
                    <p className="info__des">
                        <strong>Lastname:</strong> {user.last_name}
                    </p>
                )}
                {user.email !== "" && (
                    <p className="info__des">
                        <strong>Email:</strong> {user.email}
                    </p>
                )}
                <Button
                    type="button"
                    value="Edit Info"
                    icon={<i className="fas fa-edit"></i>}
                    handleClick={handleClick}
                />
            </div>
        )
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    current: state.auth.current
});

export default connect(mapStateToProps, { loadUser, setCurrent })(UserInfo);
