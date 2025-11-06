import express, { Router } from 'express'

const router = express.Router()

class IndexRouter {
    constructor(){
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', (req, res)=> {
            res.render('index.html')
        })

    }
}

export default new IndexRouter().router;
