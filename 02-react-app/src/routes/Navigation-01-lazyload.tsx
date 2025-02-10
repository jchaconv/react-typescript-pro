import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import logo from '../assets/react.svg';
import { routes } from "./Routes";
import { Suspense } from "react";

// Este componente es el que contiene todo el resultado de 01-lazyload

export const NavigationBkp = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {
                                routes.map((route) => (
                                    <li key={route.to}>
                                        <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                            {route.name}
                                        </NavLink>
                                    </li>))
                            }
                        </ul>
                    </nav>


                    <Routes>
                        {
                            routes.map(({ to, path, Component }) => (
                                <Route key={to} path={path} element={<Component />} />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[2].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
