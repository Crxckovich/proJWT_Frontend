import {authStore} from "@/features/Auth";

export const MainPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <button onClick={() => authStore.logout()}>Выйти из аккаунта</button>
        </div>
    );
};

export default MainPage;