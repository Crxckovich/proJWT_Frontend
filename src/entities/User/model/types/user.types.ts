enum ERole {
    "USER" = 1,
    "ADMIN" = 2,
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    isActivated: boolean,
    roleId: ERole,
}