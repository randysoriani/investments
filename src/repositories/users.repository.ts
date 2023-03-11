export interface IUser {
    id?: string;
    name: string;
    email: string;
    password?: string;
}

export interface IUsersRepository {
    findAll(): IUser[];
    findByEmail(email: string): IUser | null;
    store(user: IUser): IUser | Error;
}