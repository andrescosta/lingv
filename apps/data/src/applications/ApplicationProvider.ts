import { DataSource } from 'typeorm';
import { Application } from '../entities/Application';

export const applicationProvider = [
    {
        provide: 'APPLICATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Application),
        inject: ['DATA_SOURCE'],
    },
];
