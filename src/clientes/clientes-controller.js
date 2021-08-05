"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_controlle_1 = require("../produtos/produtos-controlle");
class ClientesController {
    constructor() {
        console.log('Clientes Iniciado');
    }
    comprar() {
        console.log('Clientes Comprrtrou Produto');
        const produtosController = new produtos_controlle_1.ProdutosController();
    }
    devolver() {
        console.log('Clientes Devolveu Produto');
        const produtosController = new produtos_controlle_1.ProdutosController();
    }
}
exports.ClientesController = ClientesController;
