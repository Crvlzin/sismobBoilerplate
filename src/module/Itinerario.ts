import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerario } from '../entity/Itinerario';
import { ItinerarioRepository } from '../repository/Itinerario';
import { ItinerarioService } from '../service/Itinerario';
import { ItinerarioController } from '../controller/Itinerario';

@Module({
    imports: [TypeOrmModule.forFeature([Itinerario])],
    controllers: [ItinerarioController],
    providers: [ItinerarioService, ItinerarioRepository],
})
export class ItinerarioModule { }
