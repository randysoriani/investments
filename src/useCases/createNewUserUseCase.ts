import { IUser, IUsersRepository } from "../repositories/users.repository";

export class CreateNewUserUseCase{
    constructor(private userRepository: IUsersRepository){}

    async execute(userData: IUser): Promise<IUser | Error>{
        const response = await this.userRepository.store(userData);
        return response;
    }
}