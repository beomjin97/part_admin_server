import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    large_category: string;

    @ApiProperty()
    @IsString()
    small_category: string;
}