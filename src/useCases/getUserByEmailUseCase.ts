import { IUsersRepository } from "../repositories/users.repository";

export class GetUserByEmailUseCase{
    constructor(private userRepository: IUsersRepository){}

    execute(email: string){
        const user = this.userRepository.findByEmail(email);
        return user;
    }
}