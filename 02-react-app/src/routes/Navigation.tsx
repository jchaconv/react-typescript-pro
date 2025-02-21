import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import logo from '../assets/react.svg';

import { routes } from "./Routes";


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikbasicpage" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikyuppage" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikcomponents" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikabstractation" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registerformik" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamicform" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({ to, path, Component }) => (
                            <Route key={to} path={path} element={<Component />} />
                        ))
                    }

                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
