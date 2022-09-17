import * as PostgressConnectionStringParser from "pg-connection-string";
import { DataSource } from 'typeorm';
import path from 'path';

export const typeormLoader = async () => {
    const databaseUrl = process.env.DATABASE_URL;

    let databaseConfig: any = {
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
    }

    if (databaseUrl) {
        const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);

        databaseConfig = { ...databaseConfig, ...connectionOptions }
        databaseConfig.extra = { ssl: true };
        databaseConfig.ssl = true;
    }

    const appDataSource = new DataSource(databaseConfig);

    await appDataSource.initialize();
}
