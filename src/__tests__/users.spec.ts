import { describe, it, expect } from 'vitest';

describe('Users', () => {
    // bad cases
    it('Should return null if no name is provided', async () => {
        const sut = new CreateUserUseCase();
        const user = await sut.execute({});
        expect(user).toBeNull();
    })

    // good cases
})



class CreateUserUseCase{
    execute(userData){
        return null
    }
}