import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Itinerario } from '../entity/Itinerario';

@Injectable()
export class ItinerarioRepository extends Repository<Itinerario> {
    constructor(private dataSource: DataSource) {
        super(Itinerario, dataSource.createEntityManager());
    }

    async findByFilters(id_linha?: number, id_itinerario?: number): Promise<Itinerario[]> {
        let sql = `
      SELECT 
        id_linha as "id_linha", 
        id_itinerario as "id_itinerario", 
        lin_extensao as "lin_extensao", 
        lin_sentido as "lin_sentido",
        geo_linhas_lin as "geo_linhas_lin",
        dataregistro as "dataregistro"
      FROM dados_mobilidade.tab_itinerario
      WHERE 1=1
    `;

        const params: any[] = [];

        if (id_linha) {
            sql += ` AND id_linha = $${params.length + 1}`;
            params.push(id_linha);
        }

        if (id_itinerario) {
            sql += ` AND id_itinerario = $${params.length + 1}`;
            params.push(id_itinerario);
        }

        // Executa a query nativa de forma segura
        return this.dataSource.query(sql, params);
    }
}
