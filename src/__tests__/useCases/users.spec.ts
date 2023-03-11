import { describe, it, expect } from 'vitest';
import { UsersInMemoryRepository } from '../../repositories/inMemory/users.inMemoryRepository';
import { CreateNewUserUseCase } from '../../useCases/createNewUserUseCase';
import { GetAllUsersUseCase } from '../../useCases/getAllUsersUseCase';

describe('Users', () => {
    // good cases
    it('Should include a new user', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new CreateNewUserUseCase(userRepository);
        const response = await sut.execute({
            name: "John Doe",
            email: 'johndoe@mail.com'
        })
        expect(response).toHaveProperty('id');
    })
 
    it('Should return a list of users', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new GetAllUsersUseCase(userRepository);
        const users = await sut.execute();
        expect(users).toBeTruthy();
    })
})