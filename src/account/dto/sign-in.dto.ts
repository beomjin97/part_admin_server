import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class SignInDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}