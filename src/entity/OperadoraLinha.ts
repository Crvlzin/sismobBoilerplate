import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_operadora_linha', schema: 'dados_mobilidade' })
export class OperadoraLinha {
    @PrimaryColumn({ name: 'id_operadora' })
    id_operadora: number;

    @PrimaryColumn({ name: 'id_linha' })
    id_linha: number;

    @CreateDateColumn({ name: 'dataregistro' })
    dataRegistro: Date;

    @Column({ name: 'dt_ultima_atualizacao_operacional', nullable: true })
    dataAtualizacaoOperacional: Date;
}
