import { ClientesController } from './clientes/clientes-controller';
import { getRequiredFields } from './core/decorator/required.decorator';
import { Produto } from './produtos/produto.model';

export class Main {
  constructor() {
    console.log('Sistema Iniciado');

    const cClientesController = new ClientesController();
    cClientesController.comprar();

    // Exemplo de uso:
    let produto: Produto;
    try {
      // Testando
      produto = new Produto(12, 'João', 100, 10);

      const requiredFields = getRequiredFields(produto);
      console.log(requiredFields); // Deve imprimir ['name', 'email']

    } catch (error: any) {
      console.error(error.message);
    } finally {
      console.log(produto);
      console.log('Finalizou');
    }
  }

  // function calcular soma de dois numeros
  public static soma(a: number, b: number): number {
    return a + b;
  }

  // function calcular empresa de dois numeros
  public static empresa(a: number): number {
    return Math.floor(a / 2);
  }
}

const cMain = new Main();

cMain;
