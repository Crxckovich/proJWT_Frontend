import {type IUser, userStore} from "@/entities/User";
import {makeAutoObservable} from "mobx";
import {AuthService} from "../services/AuthService.ts";
import {handleAxiosError} from "@/shared/api/handleAxiosError.ts";
import {redirect} from "react-router";
import axios from "axios";
import type {IAuthRes} from "@/features/Auth/model/types/auth.types.ts";
import {API} from "@/shared/config/env.ts";

export class AuthStore {
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    async signup(name: string, email: string, password: string) {
        try {
            const response = await AuthService.signup(name, email, password);
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response));
            this.setAuth(true);

            userStore.setUser(response.data.user);
            redirect("/");
        } catch (e) {
            handleAxiosError(e)
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response));
            this.setAuth(true);

            userStore.setUser(response.data.user);
            redirect("/");
        } catch (e) {
            handleAxiosError(e)
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('user');
            this.setAuth(false);

            userStore.setUser({} as IUser);
            redirect("/auth");
        } catch (e) {
            handleAxiosError(e)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<IAuthRes>(`${API}/refresh`, {withCredentials: true})

            localStorage.setItem('user', JSON.stringify(response));
            this.setAuth(true);

            userStore.setUser(response.data.user);
        } catch (e) {
            handleAxiosError(e)
        }
    }
}

export const authStore = new AuthStore();