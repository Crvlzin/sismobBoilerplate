import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { OperadoraLinhaService } from '../service/OperadoraLinha';
import { FilterOperadoraLinhaDto } from '../dto/OperadoraLinha';
import { JwtAuthGuard } from '../guards/Jwt';

@ApiTags('Operadoras e Linhas de Mobilidade')
@ApiBearerAuth() // Ativa o cadeado para todas as rotas deste controller no Swagger
@Controller('operadoralinha')
export class OperadoraLinhaController {
    constructor(private readonly operadoraService: OperadoraLinhaService) { }

    @Get()
    @UseGuards(JwtAuthGuard) // Proteção por TOKEN e EXPIRAÇÃO
    @ApiOperation({ summary: 'Obter operadoras com proteção anti-injection e autenticação' })
    async getOperadoras(@Query() filters: FilterOperadoraLinhaDto) {
        return this.operadoraService.buscarOperadoras(filters.id_operadora, filters.id_linha);
    }
}
