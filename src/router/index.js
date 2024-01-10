import getEndpoints from "express-list-endpoints";
import { Router } from "express";
import testRoutes from './test.js';
import server from '../app.js'

function init(){
    const router = Router();
    router.get("/", (req, res) => res.send({ msg : "Hello World from Timmy"}));
    router.get("/routes", (req, res) => res.send(getEndpoints(server).map((endpoint) => endpoint.methods + " " + endpoint.path)));
    router.use( '/test', testRoutes)
    return router;
}

export default init();