import { DataSource } from 'typeorm';
import path from 'path';

export const typeormLoader = async () => {
    const appDataSource = new DataSource({
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'mypassword',
        database: 'mente_sa',   
        entities: [
            path.resolve(__dirname, '..', 'api', 'users', 'models', '*.ts'),
            path.resolve(__dirname, '..', 'api', 'patient', 'models', '*.ts'),
            path.resolve(__dirname, '..', 'api', 'professional', 'models', '*.ts'),
            path.resolve(__dirname, '..', 'api', 'sessions', 'models', '*.ts'),
            path.resolve(__dirname, '..', 'api', 'resources', 'models', '*.ts'),
            path.resolve(__dirname, '..', 'api', 'history', 'models', '*.ts'),
        ],
        synchronize: true,
        logging: false,
    });

    await appDataSource.initialize();
}
