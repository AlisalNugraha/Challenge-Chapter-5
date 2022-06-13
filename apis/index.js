import {Router, json} from "express";

const routes = Router();

routes.use(json());

routes.get('/', (req,res) => {
    res.status(200).send("ini apis")
    res.end()
})

export default routes;