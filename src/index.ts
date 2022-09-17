import app from './server';

import { typeormLoader } from './loaders/typeorm';
import swaggerLoader from './loaders/swagger';

const PORT = 3333;

const configureApp = () => {

    // Application loaders
    typeormLoader();
    swaggerLoader(app);

    app.listen(PORT, () => {
        console.log(`Running at http://localhost:${PORT}`);
    });
}

configureApp();