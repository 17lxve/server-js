import { Router } from 'express';

function factory(){
    const router = Router();
    router.get("/", (req, res) => res.send({ msg : "This is the test route"}));
    return router;
}

export default factory();