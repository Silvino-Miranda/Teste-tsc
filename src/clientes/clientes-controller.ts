import { ProdutosController } from '../produtos/produtos-controlle';

export class ClientesController {
  constructor() {
    console.log('Clientes Iniciado');
  }

  comprar() {
    console.log('Clientes Comprrtrou Produto');
    const produtosController = new ProdutosController();
  }

  devolver() {
    console.log('Clientes Devolveu Produto');
    const produtosController = new ProdutosController();
  }
}
