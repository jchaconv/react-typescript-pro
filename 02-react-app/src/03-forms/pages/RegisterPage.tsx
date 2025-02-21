import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {


    const {
        name, email, password1, password2,
        onSubmit, onChange, resetForm,
        isValidEmail
    } = useForm({
        name: 'Julio',
        email: 'jchaconv@email.com',
        password1: '123456',
        password2: '123456'
    });

    const hasError = name.trim().length <= 0;

    const isValidLength = (password: string): boolean => {
        if (password.trim().length === 6) {
            return true;
        }
        return false;
    }

    return (
        <div>

            <h1>RegisterPage</h1>

            <form noValidate onSubmit={onSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${hasError && 'has-error'}`}
                />
                {hasError && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />

                {!isValidEmail(email) && <span>Email inválido</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                    className={`${(hasError || !isValidLength(password1)) && 'has-error'}`}
                />

                {hasError && <span>Este campo es necesario</span>}
                {!isValidLength(password1) && <span>La contraseña debe tener 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    className={`${(hasError || !isValidLength(password2)) && 'has-error'}`}
                />

                {hasError && <span>Este campo es necesario</span>}
                {!isValidLength(password2) && <span>La contraseña debe tener 6 caracteres</span>}

                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>

            </form>
        </div>
    )
}
