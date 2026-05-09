import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OperadoraLinha } from '../entity/OperadoraLinha';

@Injectable()
export class OperadoraLinhaRepository extends Repository<OperadoraLinha> {
    constructor(private dataSource: DataSource) {
        super(OperadoraLinha, dataSource.createEntityManager());
    }

    async findByFilters(id_operadora?: number, id_linha?: number): Promise<OperadoraLinha[]> {
        let sql = `
      SELECT 
        id_operadora as "id_operadora", 
        id_linha as "id_linha", 
        dataregistro as "dataRegistro", 
        dt_ultima_atualizacao_operacional as "dataAtualizacaoOperacional" 
      FROM dados_mobilidade.tab_operadora_linha
      WHERE 1=1
    `;

        const params: any[] = [];

        if (id_operadora) {
            sql += ` AND id_operadora = $${params.length + 1}`;
            params.push(id_operadora);
        }

        if (id_linha) {
            sql += ` AND id_linha = $${params.length + 1}`;
            params.push(id_linha);
        }

        // Executa a query nativa de forma segura
        return this.dataSource.query(sql, params);
    }
}
