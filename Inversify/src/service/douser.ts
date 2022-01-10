import { user } from "../models/user";

export interface doUser{
    newUser(name:string, lastname:string, age:number):user;
}