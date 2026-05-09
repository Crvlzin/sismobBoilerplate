import { Injectable } from '@nestjs/common';
import { ItinerarioRepository } from '../repository/Itinerario';
import { Itinerario } from '../entity/Itinerario';

@Injectable()
export class ItinerarioService {
    constructor(private readonly itinerarioRepository: ItinerarioRepository) { }

    async buscarItinerio(id_linha?: number, id_itinerario?: number): Promise<Itinerario[]> {
        return this.itinerarioRepository.findByFilters(id_linha, id_itinerario);
    }
}
