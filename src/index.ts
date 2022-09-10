import app from './server';

import { typeormLoader } from './loaders/typeorm';

const PORT = 3333;

const configureApp = () => {

    // Application loaders
    typeormLoader();

    app.listen(PORT, () => {
        console.log(`Running at http://localhost:${PORT}`);
    });
}

configureApp();