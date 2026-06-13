import './styles/App.css'
import {AuthFormWrapper} from "@/features/Auth";
import {useContext, useEffect} from "react";
import {StoreContext} from "@/app/providers/StoreProvider/StoreProvider.tsx";
import {observer} from "mobx-react-lite";

function App() {

    const {authStore} = useContext(StoreContext)

    // TODO: Сделать нормальный роутинг
    // TODO: Сделать мидлвейр проверки токена
    // TODO: Сделать 404
    // TODO: Раскидать код по файлам
    useEffect(() => {
        if (localStorage.getItem("token")) {
            authStore.checkAuth();
        }
    }, [])

    if (!authStore.isAuth) {
        return (
            <AuthFormWrapper/>
        )
    }

  return (
      <section id="center">
          <AuthFormWrapper/>
      </section>
  )
}

export default observer(App)
