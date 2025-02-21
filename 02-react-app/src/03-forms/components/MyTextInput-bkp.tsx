/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from "formik"

interface MyTextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;   //para añadir cualquier cantidad de props adicionales
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {


    // con el meta también puedo tener control de los errores
    const [field, meta] = useField(props);
    //console.log(field);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    )
}
