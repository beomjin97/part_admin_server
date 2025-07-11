import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class MapPartDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category_id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    location_id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    manufacturer_id: number;


    

    
}