import React, { useEffect } from "react";

import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";

const UserInfo = ({ isAuthenticated, user, loadUser }) => {
    useEffect(() => {
        if (isAuthenticated) {
            loadUser();
        }
    }, [isAuthenticated]);

    return (
        isAuthenticated &&
        user && (
            <div className="info">
                {user.first_name !== "" && (
                    <p className="info__des">first name: {user.first_name}</p>
                )}
                {user.last_name !== "" && (
                    <p className="info__des">last name: {user.last_name}</p>
                )}
                {user.email !== "" && (
                    <p className="info__des">email: {user.email}</p>
                )}
                {user.mobile && (
                    <p className="info__des">mobile: {user.mobile}</p>
                )}
            </div>
        )
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, { loadUser })(UserInfo);
