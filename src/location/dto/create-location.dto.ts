import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLocationDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    large_location: string;
    
    @ApiProperty()
    @IsString()
    small_location: string;
}