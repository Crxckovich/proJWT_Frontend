import type {AuthStore} from "@/features/Auth/model/store/authStore.ts";
import type {UserStore} from "@/entities/User/model/store/userStore.ts";

export interface IStateSchema {
    authStore: AuthStore;
    userStore: UserStore;
}