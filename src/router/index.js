// Imports
import getEndpoints from "express-list-endpoints";
import testRoutes from './test.js';
import server from '../app.js'
import { Router } from "express";

function init(){
    // Create a router for general use
    const router = Router();

    // Add the routes to the router
    // Simple routes
    router.get("/", (req, res) => res.send({ msg : "Hello World from Timmy!"}));
    router.get('/routes', (req, res) => res.send(getEndpoints(server).map((endpoint) => `${ endpoint.methods } ${ endpoint.path }`)));
    
    // Gouped routes
    router.use( '/test', testRoutes);
    
    // Return the router with all routes set
    return router;
}

// Exports
export default init();