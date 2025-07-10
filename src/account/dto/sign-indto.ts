import { IsNotEmpty, IsString } from "class-validator";


export class SignInDto {
    
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}