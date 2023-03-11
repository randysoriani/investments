import { describe, it, expect } from 'vitest';
import { UsersInMemoryRepository } from '../../repositories/inMemory/users.inMemoryRepository';
import { GetAllUsersUseCase } from '../../useCases/getAllUsersUseCase';

describe('Users', () => {
    // good cases
    it('Should return a list of users', async () => {
        const userRepository = new UsersInMemoryRepository();
        const sut = new GetAllUsersUseCase(userRepository);
        const users = await sut.execute();
        console.log(users)
        expect(users).toBeTruthy();
    })
})