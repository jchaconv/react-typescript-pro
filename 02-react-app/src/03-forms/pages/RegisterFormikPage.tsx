import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>

            <h1>Registe Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(3, 'Debe tener 3 caracteres como mínimo')
                            .max(15, 'Debe tener 15 caracteres como máximo')
                            .required('Requerido'),

                        email: Yup.string()
                            .email('Email inválido')
                            .required('Requerido'),

                        password1: Yup.string()
                            .min(5, "Password must be at least 5 characters")
                            .max(8, "Password must be less than 9 characters")
                            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                            .matches(/\d/, "Password must contain at least one number")
                            .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
                            .required('Requerido'),

                        password2: Yup.string()
                            .oneOf([Yup.ref("password1")], "Passwords must match")
                            .required("Por favor confirma el password")
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput label="Name" name="name" placeholder="Nombre completo" />
                            <MyTextInput label="Email" name="email" type="email" placeholder="Email" />
                            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
                            <MyTextInput label="Confirm password" name="password2" type="password" placeholder="******" />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
