import {IsString,IsInt} from 'class-validator'

export class AuthDto{
    readonly username: string;
    readonly password: string;
}