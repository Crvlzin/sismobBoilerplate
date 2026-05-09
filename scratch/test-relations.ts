import { DataSource } from 'typeorm';
import { Linha } from './src/entity/Linha';
import { Operadora } from './src/entity/Operadora';
import { OperadoraLinha } from './src/entity/OperadoraLinha';
import { Itinerario } from './src/entity/Itinerario';

// Simulação de verificação
async function verify() {
    const ds = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [Linha, Operadora, OperadoraLinha, Itinerario],
    });

    await ds.initialize();
    console.log('--- TESTE DE RELACIONAMENTOS ---');
    
    const linha = await ds.getRepository(Linha).findOne({
        where: { id: 2824 },
        relations: ['operadoras', 'itinerarios', 'operadoras.operadora']
    });

    if (linha) {
        console.log(`Linha: ${linha.codigo} - ${linha.descricao}`);
        console.log(`Quantidade de Itinerários (Traçados): ${linha.itinerarios.length}`);
        console.log(`Operadoras vinculadas: ${linha.operadoras.map(o => o.operadora.nome).join(', ')}`);
    } else {
        console.log('Linha 2824 não encontrada.');
    }

    await ds.destroy();
}

verify();
