import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/error/app-error";
import { logger } from "../../../../shared/pino/pino-logger";
import { CreateUserUseCase } from "./create-user-usecase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const userBody = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const user = await createUserUseCase.execute(userBody);
        return response.status(201).json(user);
    }
}

export { CreateUserController }