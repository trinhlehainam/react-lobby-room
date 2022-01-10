/**
 * IMPORTANT: 
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 * 
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options 
 */

import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server } from "colyseus"
import { monitor } from "@colyseus/monitor"

import { MyRoom } from "./rooms/MyRoom"

class App {
    private port: number
    private server: Server

    constructor(port: number) {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use(express.static(path.resolve(__dirname, '../../client/build')));
        app.use('/colyseus', monitor());

        this.port = port;
        this.server = new Server({server: createServer(app)});
    }

    init(): App {
        this.server.define("MyRoom", MyRoom);

        return this;
    }

    start() {
        this.server.listen(this.port);
    }
}

const PORT = Number(process.env.PORT || 8080);
new App(PORT).init().start();
