/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, useField } from "formik"

interface MyCheckboxProps {
    label: string;
    name: string;[x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {


    const [field] = useField({...props, type: 'checkbox'});
    
    // funciona mejor al quitarle el htmlFor porque le doy click a
    // las letras y marca el checkbox

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
