import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    
    @IsString()
    @IsNotEmpty()
    large_category: string;

    @IsString()
    small_category: string;
}