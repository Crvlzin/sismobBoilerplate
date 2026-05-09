import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperadoraLinha } from '../entity/OperadoraLinha';
import { OperadoraLinhaRepository } from '../repository/OperadoraLinha';
import { OperadoraLinhaService } from '../service/OperadoraLinha';
import { OperadoraLinhaController } from '../controller/OperadoraLinha';

@Module({
    imports: [TypeOrmModule.forFeature([OperadoraLinha])],
    controllers: [OperadoraLinhaController],
    providers: [OperadoraLinhaService, OperadoraLinhaRepository],
})
export class OperadoraLinhaModule { }
