import { Router } from "express";
import { CreateUserController } from "../../module/users/controller/create-user-controller";

const usersRoutes = Router();
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export default usersRoutes;