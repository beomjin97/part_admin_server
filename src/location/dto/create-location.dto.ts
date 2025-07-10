import { IsNotEmpty, IsString } from "class-validator";

export class CreateLocationDto {
    
    @IsString()
    @IsNotEmpty()
    large_location: string;
    
    @IsString()
    small_location: string;
}