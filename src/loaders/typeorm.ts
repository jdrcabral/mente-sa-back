import { DataSource } from 'typeorm';

export const typeormLoader = async () => {
    const appDataSource = new DataSource({
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'mypassword',
        database: 'mente_sa',   
        entities: [],
        synchronize: true,
        logging: false,
    });

    await appDataSource.initialize();
}