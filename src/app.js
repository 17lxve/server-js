import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './router/index.js';
import morgan from 'morgan';

const middleware = (req, res, next) => {
    console.log("A request was made");
    next();
}

function init(){
    const app = express()
    const dependencies = [
        cors({ origin : true }),
        helmet(),
        morgan("dev"),
        middleware,
        express.json(),
        express.text({ type : 'text/html' }),
        router
    ]
    for (const element of dependencies) app.use(element)
    return app;
}

export default init();