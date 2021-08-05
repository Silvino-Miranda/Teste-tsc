import { ClientesController } from './clientes/clientes-controller';
export class Main {
    constructor() {
        console.log('Sistema Iniciado');
        const cClientesController = new ClientesController();
        cClientesController.comprar();
    }
}
const cMain = new Main();
