import { ProdutosController } from '../produtos/produtos-controlle';

export class ClientesController {
  produtosController: ProdutosController;
  constructor() {
    console.log('Clientes Iniciado');
    this.produtosController = new ProdutosController();
  }

  comprar() {
    console.log('Clientes Comprou um Produto');
    this.produtosController.comprar();
  }

  devolver() {
    console.log('Clientes Devolveu Produto');
    this.produtosController.devolver();
  }
}
