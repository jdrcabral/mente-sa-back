import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerLoader = (app: Express) => {
    const options = {
        definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mente Sa',
            version: '0.0.1',
        },
        host: `localhost:3333`, // Host (optional)
        basePath: '/', // Base path (optional)
        },
        apis: [`${__dirname}/../api/**/route*.ts`], // files containing annotations as above
    };
    const swaggerSpec = swaggerJSDoc(options);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerLoader;