// Imports
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './router/index.js';
import morgan from 'morgan';
import { middlewareExample } from './middleware/index.js'

function init(){
    // Create Express Server
    const app = express()

    // Add dependencies to the app
    // Including custom middleware
    const dependencies = [
        cors({ origin: true }),
        helmet(),
        morgan("dev"),
        express.json(),
        express.text({ type : 'text/html' }),
        middlewareExample,
        router
    ]
    for (const dependency of dependencies) app.use(dependency)

    // Return the server with all parameters defined
    return app;
}

// Exports
export default init();