import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_operadora', schema: 'dados_mobilidade' })
export class Operadora {
    @PrimaryColumn({ name: 'id_operadora' })
    id: number;

    @Column({ name: 'nm_cpf_cnpj', length: 14 })
    num_cpf_cnpj: string;

    @Column({ name: 'nm_operadora', length: 255 })
    nome: string;

    @CreateDateColumn({ name: 'dataregistro' })
    dataRegistro: Date;

    @Column({ name: 'inicio_autorga', type: 'date' })
    datainicio: Date;

    @Column({ name: 'fim_autorga', type: 'date', nullable: true })
    datafim: Date;
}
