import { React, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { adminAuthContext } from '../contexts/AdminAuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { admin } = useContext(adminAuthContext);

    return <Route
        {...rest}
        render={props => admin ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: '/admin_panel',
                    state: { from: props.location }
                }}
            />
        )}
    />
};

export default PrivateRoute;