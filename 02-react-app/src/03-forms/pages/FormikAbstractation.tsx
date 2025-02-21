
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstractation = () => {


    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),

                        lastName: Yup.string()
                            .max(10, 'Debe tener 10 caracteres o menos')
                            .required('Requerido'),

                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),

                        terms: Yup.boolean()
                            .oneOf([true], 'Debe aceptar los términos y condiciones'),

                        jobType: Yup.string()
                            .notOneOf(['dbadmin'], 'Opción no permitida')
                            .required('Requerido')
                    })}
            >
                {
                    () => (
                        <Form>

                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Julio"

                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Chacón"

                            />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder="jchacon@email.com"
                                type="email"

                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer1">Junior Developer</option>
                                <option value="developer2">Senior Developer</option>
                                <option value="designer">UX Designer</option>
                                <option value="dbadmin">Database Admin</option>
                            </MySelect>
                            
                            <MyCheckbox label="Terms & Conditions" name="terms"  />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
