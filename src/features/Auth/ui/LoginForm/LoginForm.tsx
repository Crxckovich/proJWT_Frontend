import { useState } from "react";
import styles from './LoginForm.module.scss';
import { authStore } from "@/features/Auth";

export interface ILoginFormProps {
    onFormChange?: () => void;
}

const LoginForm = ({ onFormChange }: ILoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
            <h2 className={styles.title}>Вход в аккаунт</h2>

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

            <button
                type="submit"
                className={styles.submitBtn}
                onClick={() => authStore.login(email, password)}
            >
                Войти
            </button>

            <button
                type="button"
                className={styles.switchBtn}
                onClick={onFormChange}
            >
                Ещё не зарегистрированы?
            </button>
        </form>
    );
};

export default LoginForm;