import {$api} from "@/shared/api/api.ts";
import type {AxiosResponse} from "axios";
import type { IUser } from "../model/types/user.types";

export class UsersApi {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/users")
    }
}

export default new UsersApi();