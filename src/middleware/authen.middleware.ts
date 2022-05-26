import { ConflictException, HttpException, HttpStatus } from "@nestjs/common";
import { error } from "console";
import { Response } from "@nestjs/common";

export const  checkData = (email,password) =>{
    if(!(email & password)){
        throw new ConflictException({
            message: ['Input is require']
        })
    }else{
        return {email,password};
    }
    
}