import express, {Router} from "express";

const routes = Router();

routes.use('/assets', express.static("./views/assets"))

routes.get('/', (req,res) => {
    res.render('index');
    res.end()
})

routes.get('/home', (req,res) => {
    res.render('home');
    res.end()
})

routes.get('/thegames', (req,res) => {
    res.render('thegames');
    res.end()
})

routes.get('/features', (req,res) => {
    res.render('features');
    res.end()
})

routes.get('/requirements', (req,res) => {
    res.render('requirements');
    res.end()
})

routes.get('/topscore', (req,res) => {
    res.render('topscore');
    res.end()
})

routes.get('/games', (req,res) => {
    res.render('games');
    res.end()
})

routes.post('/login', (request, response)=> {
    const { username, password } = request.body;
    console.log(username, password);
})

export default routes;