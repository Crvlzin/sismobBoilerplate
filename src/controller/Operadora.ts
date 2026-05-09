import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { OperadoraService } from '../service/Operadora';
import { FilterOperadoraDto } from '../dto/Operadora';
import { JwtAuthGuard } from '../guards/Jwt';

@ApiTags('Operadoras de Mobilidade')
@ApiBearerAuth() // Ativa o cadeado para todas as rotas deste controller no Swagger
@Controller('operadoras')
export class OperadoraController {
    constructor(private readonly operadoraService: OperadoraService) { }

    @Get()
    @UseGuards(JwtAuthGuard) // Proteção por TOKEN e EXPIRAÇÃO
    @ApiOperation({ summary: 'Obter operadoras com proteção anti-injection e autenticação' })
    async getOperadoras(@Query() filters: FilterOperadoraDto) {
        return this.operadoraService.buscarOperadoras(filters.id_operadora, filters.nome);
    }
}
