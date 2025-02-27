import { DataSource } from 'typeorm';
import { Classe } from '../entities/classe.entity';

export const classeProviders = [
    {
        provide: 'CLASSE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Classe),
        inject: ['DATA_SOURCE'],
    },
];
