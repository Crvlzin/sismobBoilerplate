import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly dataSource: DataSource) { }

  async onApplicationBootstrap() {
    this.logger.log('Iniciando processo de verificação de SEEDS...');

    // A ordem importa por causa das Foreign Keys!
    await this.runSeed('tab_operadora', 'tab_operadora.sql');
    await this.runSeed('tab_linha', 'tab_linha.sql');
    await this.runSeed('tab_operadora_linha', 'tab_operadora_linha.sql');
    await this.runSeed('tab_itinerario', 'tab_itinerario.sql');

    this.logger.log('Processo de SEEDS finalizado.');
  }

  /**
   * Método genérico para executar um arquivo SQL se a tabela estiver vazia
   */
  private async runSeed(tableName: string, fileName: string) {
    try {
      // 1. Verifica se a tabela já tem dados
      const countResult = await this.dataSource.query(`SELECT COUNT(*) as total FROM dados_mobilidade.${tableName}`);
      const total = parseInt(countResult[0].total, 10);

      if (total > 0) {
        this.logger.log(`Tabela ${tableName} já contém ${total} registros. Pulando.`);
        return;
      }

      // 2. Localiza o arquivo SQL
      const sqlPath = path.join(process.cwd(), 'src', 'config', fileName);
      if (!fs.existsSync(sqlPath)) {
        this.logger.error(`Arquivo não encontrado: ${sqlPath}`);
        return;
      }

      this.logger.log(`Lendo e executando ${fileName} para a tabela ${tableName}...`);

      // 3. Lê e executa o conteúdo (UTF-8)
      const sqlContent = fs.readFileSync(sqlPath, 'utf8');

      // Usamos uma transação para garantir que ou vai tudo ou não vai nada
      await this.dataSource.query(sqlContent);

      this.logger.log(`✅ Tabela ${tableName} semeada com sucesso!`);
    } catch (error) {
      this.logger.error(`❌ Erro ao semear ${tableName}: ${error.message}`);
    }
  }
}
