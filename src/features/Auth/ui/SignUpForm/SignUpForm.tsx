import { useContext, useState } from "react";
import { StoreContext } from "@/app/providers/StoreProvider/StoreProvider";
import styles from './SignUpForm.module.scss';

export interface ISignUpFormProps {
    onFormChange?: () => void;
}

const SignUpForm = ({ onFormChange }: ISignUpFormProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retryPassword, setRetryPassword] = useState('');
    const { authStore } = useContext(StoreContext);

    return (
        <form className={styles.signUpForm} onSubmit={(e) => e.preventDefault()}>
            <h2 className={styles.title}>Регистрация</h2>

            <div className={styles.field}>
                <input
                    className={styles.input}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Имя"
                    required
                />
            </div>

            <div className={styles.field}>
                <input
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                />
            </div>

            <div className={styles.field}>
                <input
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Пароль"
                    required
                />
            </div>

            <div className={styles.field}>
                <input
                    className={styles.input}
                    onChange={(e) => setRetryPassword(e.target.value)}
                    value={retryPassword}
                    type="password"
                    placeholder="Повторите пароль"
                    required
                />
            </div>

            <button
                type="submit"
                className={styles.submitBtn}
                onClick={() => authStore.signup(name, email, password)}
            >
                Зарегистрироваться
            </button>

            <button
                type="button"
                className={styles.switchBtn}
                onClick={onFormChange}
            >
                Уже есть аккаунт?
            </button>
        </form>
    );
};

export default SignUpForm;