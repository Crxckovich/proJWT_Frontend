import { useCallback, useState } from "react";
import styles from "./LoginForm.module.scss";
import { useAuthStore } from "@/app/providers/StoreProvider/StoresRegister.ts";
import { observer } from "mobx-react-lite";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/const/router.ts";

export interface ILoginFormProps {
  onFormChange?: () => void;
}

export const LoginForm = observer(
  ({ onFormChange }: ILoginFormProps) => {
    const authStore = useAuthStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
      (email: string, password: string) => {
        authStore
          .login(email, password)
          .then(() => navigate(getRouteMain()));
      },
      [authStore, navigate]
    );

    return (
      <form
        className={styles.loginForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className={styles.title}>Вход в аккаунт</h2>

        <div className={styles.field}>
          <Input
            onChange={setEmail}
            value={email}
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.field}>
          <Input
            onChange={setPassword}
            value={password}
            type="password"
            placeholder="Пароль"
            required
          />
        </div>

        <Button
          type="submit"
          onClick={() => handleSubmit(email, password)}
        >
          Войти
        </Button>

        <Button type="button" onClick={onFormChange}>
          Ещё не зарегистрированы?
        </Button>
      </form>
    );
  }
);
