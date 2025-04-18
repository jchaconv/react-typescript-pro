import React from 'react';
import PropTypes from 'prop-types';

import { Route, Navigate } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            element={isAuthenticated ? <Navigate to="/" /> : <Component/>}
            
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}