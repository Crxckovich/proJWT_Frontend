import {createContext, type ReactNode} from "react";
import type {IStateSchema} from "./config/StateSchema.ts";
import {userStore} from "@/entities/User";
import { authStore } from "@/features/Auth";

interface IStoreProviderProps {
    children?: ReactNode;
}

export const StoreContext = createContext<IStateSchema>({
    authStore,
    userStore
});

const StoreProvider = ({children}: IStoreProviderProps) => {

    return (
        <StoreContext.Provider
            value={{authStore, userStore}}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;