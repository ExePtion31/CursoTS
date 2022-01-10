import { AppContainer } from "./config/invesify.config";
import { controller } from "./controller/Controller"
import { TYPES } from "./utils/constants";

let controller: controller;
controller = AppContainer.get<controller>(TYPES.controller);
console.log(controller);

