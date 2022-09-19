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
        servers: [
            {
                url: 'http://localhost:3333',
                description: 'Development Server',
            },
            {
                url: 'https://ga-mente-sa.herokuapp.com',
                description: 'Staging',
            },
        ]
        },
        apis: [`${__dirname}/../api/**/route*.ts`], // files containing annotations as above
    };
    const swaggerSpec = swaggerJSDoc(options);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerLoader;