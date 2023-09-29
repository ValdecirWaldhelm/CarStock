import express from "express";
import routes from "./routes";
import mongoose from 'mongoose';
import path from 'path';

// DOTENV
require('dotenv').config();

class App{
    constructor(){
        this.server = express();

        const DB_USER = process.env.DB_USER;
        const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@carstock.qoqcxu6.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        this.midllewares();
        this.routes();

    }

    midllewares(){

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )

        this.server.use(express.json());

    }

    routes(){
        this.server.use(routes);

    }

}

export default new App().server;