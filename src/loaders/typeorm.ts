import * as PostgressConnectionStringParser from "pg-connection-string";
import { DataSource } from 'typeorm';
import path from 'path';

export const typeormLoader = async () => {
    let databaseUrl = process.env.DATABASE_URL;
    let databaseConfig: any = {
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'mypassword',
        database: 'mente_sa',   
        entities: [
            path.resolve(__dirname, '..', 'api', 'users', 'models', '*.{js,ts}'),
            path.resolve(__dirname, '..', 'api', 'patient', 'models', '*.{js,ts}'),
            path.resolve(__dirname, '..', 'api', 'professional', 'models', '*.{js,ts}'),
            path.resolve(__dirname, '..', 'api', 'sessions', 'models', '*.{js,ts}'),
            path.resolve(__dirname, '..', 'api', 'resources', 'models', '*.{js,ts}'),
            path.resolve(__dirname, '..', 'api', 'history', 'models', '*.{js,ts}'),
        ],
        synchronize: true,
        logging: false,
    }
    if (databaseUrl) {
        const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);

        // databaseConfig = { ...databaseConfig, ...connectionOptions }
        // databaseConfig.extra = {
        //     ssl: {
        //         rejectUnauthorized: false
        //     }
        // };
        // databaseConfig.ssl = true;

        databaseConfig = {
            type: 'postgres',
            host: 'ec2-3-225-213-67.compute-1.amazonaws.com',
            port: 5432,
            username: 'uuiqdzrgasmqea',
            password: 'eef32a40b68ac82bf855d74344042843726c6e69e33cf68f3497565737017f84',
            database: 'dbdthohqdt8jiq',   
            entities: [
                path.join(__dirname, '..', 'api', 'users', 'models', '*.{js,ts}'),
                path.join(__dirname, '..', 'api', 'patient', 'models', '*.{js,ts}'),
                path.join(__dirname, '..', 'api', 'professional', 'models', '*.{js,ts}'),
                path.join(__dirname, '..', 'api', 'sessions', 'models', '*.{js,ts}'),
                path.join(__dirname, '..', 'api', 'resources', 'models', '*.{js,ts}'),
                path.join(__dirname, '..', 'api', 'history', 'models', '*.{js,ts}'),
            ],
            synchronize: true,
            logging: false,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
            ssl: true,
        }
    }
    const appDataSource = new DataSource(databaseConfig);

    await appDataSource.initialize();
}
