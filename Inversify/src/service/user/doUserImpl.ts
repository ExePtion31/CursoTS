import { user } from "../../models/user";
import { doUser } from "../douser";

export class doUserImpl implements doUser{

    constructor(){}

    newUser(name: string, lastname: string, age: number): user {
        return new user(name, lastname, age);
    }
}