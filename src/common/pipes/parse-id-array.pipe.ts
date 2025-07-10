import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIdArrayPipe implements PipeTransform<string, number[]> {
    transform(value: string): number[] {
        if (!value || typeof value !== 'string')
        throw new BadRequestException("Query parameter 'ids' must be a comma-separated string");

        const idArray = value
            .split(',')
            .map( id => parseInt(id.trim(),10))
            .filter(id => !isNaN(id));
        
        if (idArray.length === 0) {
            throw new BadRequestException('No valid numeric ID found in "ids" parameter')
        }

        return idArray;
    }
}