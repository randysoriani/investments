import { describe, it, expect } from 'vitest'

describe('Sample', () => {
    it('Should return OK string', ()=> {
        const string = 'OK'
        expect(string).toBe('OK');
    })
})