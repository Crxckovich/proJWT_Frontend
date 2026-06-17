import type {AuthStore} from "@/features/Auth/model/store/authStore.ts";
import type {UserStore} from "@/entities/User/model/store/userStore.ts";

export interface IStateSchema {
    userStore: UserStore;
    authStore: AuthStore;

    // Асинхронные сторы
}

export type StateSchemaKey = keyof IStateSchema;