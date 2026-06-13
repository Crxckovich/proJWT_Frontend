import type {IUser} from "@/entities/User";
import {makeAutoObservable} from "mobx";

export class UserStore {
    user = {} as IUser;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: IUser) {
        this.user = user;
    }
}

export const userStore = new UserStore();