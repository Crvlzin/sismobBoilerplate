import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ItinerarioService } from '../service/Itinerario';
import { FilterItinerarioDto } from '../dto/Itinerario';
import { JwtAuthGuard } from '../guards/Jwt';

@ApiTags('Itinerario de linhas')
@ApiBearerAuth() // Ativa o cadeado para todas as rotas deste controller no Swagger
@Controller('itinerarios')
export class ItinerarioController {
    constructor(private readonly itinerarioService: ItinerarioService) { }

    @Get()
    @UseGuards(JwtAuthGuard) // Proteção por TOKEN e EXPIRAÇÃO
    @ApiOperation({ summary: 'Obter itinerarios com proteção anti-injection e autenticação' })
    async getItinerario(@Query() filters: FilterItinerarioDto) {
        return this.itinerarioService.buscarItinerio(filters.id_linha, filters.id_itinerario);
    }
}
