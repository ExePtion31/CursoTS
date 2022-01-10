export class user{
    readonly name: string;
    readonly lastname: string;
    readonly age: number;

    constructor(name:string, lastname:string, age:number){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}