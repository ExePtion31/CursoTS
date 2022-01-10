import { user } from "../models/user"

export interface controller{
    makeUser(): user;
}