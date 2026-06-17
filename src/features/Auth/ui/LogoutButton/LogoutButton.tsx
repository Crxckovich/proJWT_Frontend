import { useAuthStore } from "@/app/providers/StoreProvider/StoresRegister.ts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { getRouteAuth } from "@/shared/const/router.ts";

export const LogoutButton = observer(() => {
  const authStore = useAuthStore();

  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    authStore.logout().then(() => navigate(getRouteAuth()));
  }, [authStore, navigate]);

  return <button onClick={handleSubmit}>Выйти из аккаунта</button>;
});
