import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class createHistoryDto {
    
    @IsNumber()
    @IsNotEmpty()
    part_id: number; 
    
    @IsBoolean()
    @IsNotEmpty()
    is_import: boolean; 
    
    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    count: number; 
    
    @IsDateString()
    @IsNotEmpty()
    date: Date
}