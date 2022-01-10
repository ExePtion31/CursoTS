export class User{

    constructor(
        public name: String,
        public lastname: String,
        public age: number,
        public email: String,
        public phone: number
    ){}

    getFullName() : String{
        if(this.name === '' || this.lastname === ''){
            return 'Please check the personal data';
        }
        return `${this.name} ${this.lastname}`;
    }

    getAgeIn(years: number): number{
        return this.age + years;
    }

    isAdult(): boolean{
        if(this.age < 18){
            return false;
        }
        return true;
    }
}