import { createParamDecorator,ExecutionContext } from "@nestjs/common";
import { Users } from "src/users/users.model";


export const GetUser = createParamDecorator((req): Users =>{
    return req.user;
})