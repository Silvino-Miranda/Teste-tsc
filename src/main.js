"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_controller_1 = require("./clientes/clientes-controller");
class Main {
    constructor() {
        console.log('Sistema Iniciado');
        const cClientesController = new clientes_controller_1.ClientesController();
        cClientesController.comprar();
    }
}
exports.Main = Main;
const cMain = new Main();
