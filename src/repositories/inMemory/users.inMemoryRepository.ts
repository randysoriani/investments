import { randomUUID } from 'node:crypto'
import { IUser, IUsersRepository } from '../users.repository'

export class UsersInMemoryRepository implements IUsersRepository {
    users: IUser[] = [];
    
    findAll(): IUser[] {
        return this.users;
    }

    findByEmail(email: string): IUser | null{
        const user = this.users.filter( user => user.email === email);

        if(!user){
            return null
        }

        return user[0]
    }

    store(userData: IUser): IUser | Error{
        const emailAlreadyTaken = this.users.find( user => user.email === userData.email)

        if(emailAlreadyTaken){
            return new Error('EmailAlreadyTaken');
        }

        userData.id = randomUUID();
        this.users.push(userData);
        return userData
    }
}