/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, useField } from "formik"

interface MyTextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;   //para añadir cualquier cantidad de props adicionales
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {


    const [field] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
