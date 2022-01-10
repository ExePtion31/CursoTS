import { Container } from "inversify";
import { TYPES } from "../utils/constants";

import { doUserImpl } from "../service/user/doUserImpl";
import { doUser } from "../service/douser";

import { controller } from "../controller/Controller"
import { controllerImpl } from "../controller/impl/controllerImpl"

var AppContainer = new Container();
AppContainer.bind<doUser>(TYPES.doUser).to(doUserImpl);
AppContainer.bind<controller>(TYPES.controller).to(controllerImpl);

export { AppContainer };