import { EmailAlreadyTakenError } from "../errors/EmailAlreadyTakenError";
import { MissingParamsError } from "../errors/MissingParamsError";
import { IUser, IUsersRepository } from "../repositories/users.repository";

export class CreateNewUserUseCase{
    constructor(private userRepository: IUsersRepository){}

    async execute(userData: IUser): Promise<IUser | Error>{

        if(!userData.email || !userData.name || !userData.password){
            return new MissingParamsError('Mandatory parameters not found');
        }

        const emailAlreadyTaken = await this.userRepository.findByEmail(userData.email);
        if(emailAlreadyTaken){
            return new EmailAlreadyTakenError('The informed email is already in use');
        }
        const response = await this.userRepository.store(userData);
        return response;
    }
}