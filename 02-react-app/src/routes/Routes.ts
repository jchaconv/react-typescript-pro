import { JSX, LazyExoticComponent } from "react";

import { FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation, RegisterPage, RegisterFormikPage, DynamicForm } from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}


export const routes: Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'RegisterPage'
    },
    {
        to: '/formikbasicpage',
        path: 'formikbasicpage',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formikyuppage',
        path: 'formikyuppage',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formikcomponents',
        path: 'formikcomponents',
        Component: FormikComponents,
        name: 'Formik Yup'
    },
    {
        to: '/formikabstractation',
        path: 'formikabstractation',
        Component: FormikAbstractation,
        name: 'Formik Abstractation'
    },
    {
        to: '/registerformik',
        path: 'registerformik',
        Component: RegisterFormikPage,
        name: 'Register Formik'
    },
    {
        to: '/dynamicform',
        path: 'dynamicform',
        Component: DynamicForm,
        name: 'Dynamic Form'
    }
];