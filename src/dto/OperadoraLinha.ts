import { IsString, IsOptional, MaxLength, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FilterOperadoraLinhaDto {
    @ApiProperty({ description: 'Id da linha' })
    @Type(() => Number)
    @IsNumber()
    id_linha?: number;

    @ApiProperty({ description: 'Id da operadora' })
    @Type(() => Number)
    @IsNumber()
    id_operadora?: number;
}
