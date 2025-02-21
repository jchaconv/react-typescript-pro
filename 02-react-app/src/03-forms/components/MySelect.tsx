/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, useField } from "formik"

interface MySelectProps {
    label: string;
    name: string;
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: MySelectProps) => {


    const [field] = useField(props);


    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
