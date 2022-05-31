import {IsString, IsEmail, IsNotEmpty, isEmail, MaxLength,MinLength,Matches} from 'class-validator'

export class UserDto{

    @IsEmail()
    readonly email: string
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    readonly password: string;

}