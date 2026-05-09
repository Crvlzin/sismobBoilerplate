import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operadora } from '../entity/Operadora';
import { OperadoraRepository } from '../repository/Operadora';
import { OperadoraService } from '../service/Operadora';
import { OperadoraController } from '../controller/Operadora';

@Module({
    imports: [TypeOrmModule.forFeature([Operadora])],
    controllers: [OperadoraController],
    providers: [OperadoraService, OperadoraRepository],
})
export class OperadoraModule { }
