import { IUser, IUsersRepository } from "../repositories/users.repository";

export class GetAllUsersUseCase {
    constructor(private userRepository: IUsersRepository){}

    async execute(): Promise<IUser[]> {
        const users = await this.userRepository.findAll();
        return users;
    }
}