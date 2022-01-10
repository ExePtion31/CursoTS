import { User } from './user.model';

describe('test from user model', () => {

    describe('test from getFullName() function', () => {
        it('should return Giovanni Baquero', () => {
            const person = new User('Giovanni', 'Baquero', 21, 'gbaquero@email.com', 3115132734);
            expect(person.getFullName()).toEqual('Giovanni Baquero');
        });

        it('should return error message', () => {
            const person = new User('Giovanni', '', 21, 'gbaquero@email.com', 3115132734);
            expect(person.getFullName()).toEqual('Please check the personal data');
        });
    });

    describe('test from getAgeIn() function', () => {
        it('should return 31 years', () => {
            const person = new User('Giovanni', 'Baquero', 21, 'gbaquero@email.com', 3115132734);
            expect(person.getAgeIn(10)).toEqual(31);
        });
    });

    describe('test from is adult() function', () => {
        it('should return true', () => {
            const person = new User('Giovanni', 'Baquero', 21, 'gbaquero@email.com', 3115132734);
            expect(person.isAdult()).toEqual(true);
        });

        it('should return false', () => {
            const person = new User('Giovanni', 'Baquero', 16, 'gbaquero@email.com', 3115132734);
            expect(person.isAdult()).toEqual(false);
        })
    });
});