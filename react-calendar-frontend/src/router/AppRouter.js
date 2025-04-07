import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h5>Espere...</h5>;
    }

    return (
        <Router>
            <Routes>
                {/* Ruta pública */}
                <Route
                    path="/login"
                    element={
                        uid ? <Navigate to="/" /> : <LoginScreen />
                    }
                />

                {/* Ruta privada */}
                <Route
                    path="/"
                    element={
                        uid ? <CalendarScreen /> : <Navigate to="/login" />
                    }
                />

                {/* Redirección por defecto */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};