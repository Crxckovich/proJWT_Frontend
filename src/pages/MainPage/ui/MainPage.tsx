import {UserInfo, UsersList} from "@/entities/User";
import {LogoutButton} from "@/features/Auth";

export const MainPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <UserInfo />
            <LogoutButton />
            <div>------------------------------------------------</div>
            <UsersList/>
        </div>
    );
};

export default MainPage;