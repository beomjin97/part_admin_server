import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePartDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    part_name: string;

    @ApiProperty()
    @IsString()
    part_number: string;

    @ApiProperty()
    @IsString()
    compatible_equipment: string;

    @ApiProperty()
    @IsString()
    note: string;
}