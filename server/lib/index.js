"use strict";
/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 *
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const colyseus_1 = require("colyseus");
const monitor_1 = require("@colyseus/monitor");
const MyRoom_1 = require("./rooms/MyRoom");
const PORT = Number(process.env.PORT || 3000);
class App {
    constructor(port) {
        const app = express_1.default();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client/')));
        app.use('/colyseus', monitor_1.monitor());
        this.server = new colyseus_1.Server({ server: http_1.createServer(app) });
        this.port = port;
    }
    init() {
        this.server.define("MyRoom", MyRoom_1.MyRoom);
        return this;
    }
    start() {
        this.server.listen(this.port);
    }
}
new App(PORT).init().start();
