
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {


    return (
        <div>
            <h1>Formik Components</h1>

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

                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer1">Junior Developer</option>
                                <option value="developer2">Senior Developer</option>
                                <option value="designer">UX Designer</option>
                                <option value="dbadmin">Database Admin</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
