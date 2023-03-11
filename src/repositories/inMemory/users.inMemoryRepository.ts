import { IUser, IUsersRepository } from '../users.repository'

export class UsersInMemoryRepository implements IUsersRepository {
    users: IUser[] = [];
    
    findAll(): IUser[] {
        return this.users;
    }
}