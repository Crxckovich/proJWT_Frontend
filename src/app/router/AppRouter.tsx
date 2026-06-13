import {BrowserRouter, Route} from "react-router";
import {MainPage} from "@/pages/MainPage";
import {AuthPage} from "@/pages/AuthPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <MainPage />
            </Route>
            <Route path="/auth">
                <AuthPage/>
            </Route>
        </BrowserRouter>
    );
};

export default AppRouter;