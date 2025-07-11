import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateHistoryDto {
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    part_id: number; 
    
    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    is_import: boolean; 
    
    @ApiProperty()
    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    count: number; 
    
    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    date: string;
}