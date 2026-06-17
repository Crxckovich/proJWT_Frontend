import { useCallback, useState } from "react";
import styles from "./SignUpForm.module.scss";
import { useAuthStore } from "@/app/providers/StoreProvider/StoresRegister.ts";
import { observer } from "mobx-react-lite";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/const/router.ts";

export interface ISignUpFormProps {
  onFormChange?: () => void;
}

export const SignUpForm = observer(
  ({ onFormChange }: ISignUpFormProps) => {
    const authStore = useAuthStore();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retryPassword, setRetryPassword] = useState("");

    const handleSubmit = useCallback(
      (name: string, email: string, password: string) => {
        authStore
          .signup(name, email, password)
          .then(() => navigate(getRouteMain()));
      },
      [authStore, navigate]
    );

    return (
      <form
        className={styles.signUpForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className={styles.title}>Регистрация</h2>

        <div className={styles.field}>
          <Input
            onChange={setName}
            value={name}
            type="text"
            placeholder="Имя"
            required
          />
        </div>

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

        <div className={styles.field}>
          <Input
            onChange={setRetryPassword}
            value={retryPassword}
            type="password"
            placeholder="Повторите пароль"
            required
          />
        </div>

        <Button
          type="submit"
          onClick={() => handleSubmit(name, email, password)}
        >
          Зарегистрироваться
        </Button>

        <Button type="button" onClick={onFormChange}>
          Уже есть аккаунт?
        </Button>
      </form>
    );
  }
);
