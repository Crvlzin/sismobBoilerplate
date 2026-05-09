import { Injectable } from '@nestjs/common';
import { OperadoraRepository } from '../repository/Operadora';
import { Operadora } from '../entity/Operadora';

@Injectable()
export class OperadoraService {
    constructor(private readonly operadoraRepository: OperadoraRepository) { }

    async buscarOperadoras(id_operadora?: number, nome?: string): Promise<Operadora[]> {
        return this.operadoraRepository.findByFilters(id_operadora, nome);
    }
}