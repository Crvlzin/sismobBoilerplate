import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Linha } from './Linha';

@Entity({ name: 'tab_itinerario', schema: 'dados_mobilidade' })
export class Itinerario {
    @PrimaryColumn({ name: 'id_itinerario' })
    id_operadora: number;

    @PrimaryColumn({ name: 'id_linha' })
    id_linha: number;

    @Column({ name: 'lin_extensao' })
    lin_extensao: number;

    @Column({ name: 'lin_sentido' })
    lin_sentido: string;

    @Column({ name: 'geo_linhas_lin', type: 'geometry', spatialFeatureType: 'LineString', srid: 4326 })
    geo_linhas_lin: any;

    @Column({ name: 'dataregistro' })
    dataregistro: Date;

    @Column({ name: 'dt_inicio_vigencia' })
    dt_inicio_vigencia: Date;

    @Column({ name: 'dt_fim_vigencia', nullable: true })
    dt_fim_vigencia: Date;

    @ManyToOne(() => Linha)
    @JoinColumn({ name: 'id_linha' })
    linha: Linha;
}
