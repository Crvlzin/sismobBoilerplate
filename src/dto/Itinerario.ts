import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FilterItinerarioDto {
    @ApiProperty({ description: 'Id da linha', required: false })
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    id_linha?: number;

    @ApiProperty({ description: 'Id do itinerario', required: false })
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    id_itinerario?: number;
}
