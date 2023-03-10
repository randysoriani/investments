import { describe, it, expect } from 'vitest';
import { EmailAlreadyTakenError } from '../../errors/EmailAlreadyTakenError';
import { MissingParamsError } from '../../errors/MissingParamsError';
import { UsersInMemoryRepository } from '../../repositories/inMemory/users.inMemoryRepository';
import { CreateNewUserUseCase } from '../../useCases/createNewUserUseCase';
import { GetAllUsersUseCase } from '../../useCases/getAllUsersUseCase';
import { GetUserByEmailUseCase } from '../../useCases/getUserByEmailUseCase';

describe('Users', () => {
    // good cases
    it('Should include a new user', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new CreateNewUserUseCase(userRepository);
        const response = await sut.execute({
            name: "John Doe",
            email: 'johndoe@mail.com',
            password: 'change123'
        })
        expect(response).toHaveProperty('id');
    })
 
    it('Should return a list of users', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new GetAllUsersUseCase(userRepository);
        const users = await sut.execute();
        expect(users).toBeTruthy();
    })

    it('Should return an user by email', async () => {
        const userRepository = new UsersInMemoryRepository();
        const newUser = new CreateNewUserUseCase(userRepository);
        const sut = new GetUserByEmailUseCase(userRepository);
        await newUser.execute({
            name: "John Doe",
            email: 'valid@mail.com',
            password: 'change123'
        })

        const user = await sut.execute('valid@mail.com');
        expect(user).toHaveProperty('id')
    })


    // bad cases
    it('Should fail to create new user if params is missing', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new CreateNewUserUseCase(userRepository);
        const response = await sut.execute({
            name: "User 1",
            email: 'johndoe@mail.com'
        })

        expect(response).toBeInstanceOf(MissingParamsError)
    })

    it('Should return error if email is already in use', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new CreateNewUserUseCase(userRepository);
        await sut.execute({
            name: "User 1",
            email: 'johndoe@mail.com',
            password: 'change123'
        })

        const response = await sut.execute({
            name: "User 2",
            email: 'johndoe@mail.com',
            password: 'change123'
        })
        expect(response).toBeInstanceOf(EmailAlreadyTakenError)
    })
})