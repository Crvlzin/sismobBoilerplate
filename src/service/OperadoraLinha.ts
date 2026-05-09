import { Injectable } from '@nestjs/common';
import { OperadoraLinhaRepository } from '../repository/OperadoraLinha';
import { OperadoraLinha } from '../entity/OperadoraLinha';

@Injectable()
export class OperadoraLinhaService {
    constructor(private readonly operadoralinhaRepository: OperadoraLinhaRepository) { }

    async buscarOperadoras(id_operadora?: number, id_linha?: number): Promise<OperadoraLinha[]> {
        return this.operadoralinhaRepository.findByFilters(id_operadora, id_linha);
    }
}