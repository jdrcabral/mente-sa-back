import * as PostgressConnectionStringParser from "pg-connection-string";
import { DataSource } from 'typeorm';
import path from 'path';

export const typeormLoader = async () => {
    let databaseUrl = process.env.DATABASE_URL;
    databaseUrl = 'postgres://uuiqdzrgasmqea:eef32a40b68ac82bf855d74344042843726c6e69e33cf68f3497565737017f84@ec2-3-225-213-67.compute-1.amazonaws.com:5432/dbdthohqdt8jiq';
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

        console.log(connectionOptions);
        databaseConfig = { ...databaseConfig, ...connectionOptions }
        databaseConfig.extra = { ssl: true};
        databaseConfig.ssl = true;
    }
    console.log(databaseConfig);
    const appDataSource = new DataSource(databaseConfig);

    await appDataSource.initialize();
}
