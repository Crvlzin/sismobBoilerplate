import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Operadora } from '../entity/Operadora';

@Injectable()
export class OperadoraRepository extends Repository<Operadora> {
    constructor(private dataSource: DataSource) {
        super(Operadora, dataSource.createEntityManager());
    }

    async findByFilters(id?: number, nome?: string): Promise<Operadora[]> {
        let sql = `
      SELECT 
        id_operadora as "id", 
        nm_operadora as "nome", 
        nm_cpf_cnpj as "documento", 
        dataregistro as "data de registro", 
        inicio_autorga as "inicio", 
        fim_autorga as "fim" 
      FROM dados_mobilidade.tab_operadora
      WHERE 1=1
    `;

        const params: any[] = [];

        if (id) {
            // PROTEÇÃO: No PostgreSQL nativo (pg), usamos $1, $2, etc.
            sql += ` AND id_operadora = $${params.length + 1}`;
            params.push(id);
        }

        if (nome) {
            sql += ` AND nm_cpf_cnpj LIKE $${params.length + 1}`;
            params.push(`%${nome}%`);
        }

        // Executa a query nativa de forma segura
        return this.dataSource.query(sql, params);
    }
}
