import { JSX, LazyExoticComponent } from "react";
import { RegisterPage } from "../03-forms/pages/RegisterPage.tsx";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage.tsx";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage.tsx";
import { FormikComponents } from "../03-forms/pages/FormikComponents.tsx";

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
    }
];