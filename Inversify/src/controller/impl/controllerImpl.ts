import { injectable, inject } from "inversify";
import { user } from "../../models/user";
import { doUser } from "../../service/douser";
import { TYPES } from "../../utils/constants";
import { controller } from "../Controller"

@injectable()
export class controllerImpl implements controller{
    constructor(
        @inject(TYPES.doUser) private doUser: doUser,
    ){}

    makeUser(): user {
        return this.doUser.newUser("Giovanni", "Baquero", 21);
    }
}