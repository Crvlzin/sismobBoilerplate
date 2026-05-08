import { IsString, IsOptional, MaxLength, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterOperadoraDto {
    @ApiProperty({ description: 'Id da Operadora (Ex: 3449)' })
    @IsOptional()
    @IsNumber()
    @MaxLength(14)
    id_operadora?: number;

    @ApiProperty({ description: 'Nome da operadora (Ex: Viação Piracicabana)', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    nome?: string;
}
