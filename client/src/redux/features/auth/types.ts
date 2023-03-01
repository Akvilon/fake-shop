
export type User = {
    username: string,
    password: string
}

export type AuthState = {
    user: User | null,
    token: string,
    isLoading: boolean,
    statusMessage: string
}