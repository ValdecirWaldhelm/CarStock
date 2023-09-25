import express from "express";
import routes from "./routes";
require('dotenv').config();

class App{
    constructor(){

        // const DB_USER = process.env.DB_USER;
        // const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

        this.server = express();
        
        this.midllewares();
        this.routes();

    }

    midllewares(){
        this.server.use(express.json());

    }

    routes(){
        this.server.use(routes);

    }

}

export default new App().server;