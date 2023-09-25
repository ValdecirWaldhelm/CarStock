import { Router } from "express";

const routes = new Router();

routes.get('/cars', (req, res) => {
    return res.json({
        message: "FUNCIONANDO"
    })
})

export default routes;