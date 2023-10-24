import { ProdutosController } from './produtos-controller';

describe('ProdutosController', () => {
  let produtosController: ProdutosController;

  beforeEach(() => {
    // Limpa todas as instâncias e chamadas para os mocks de console.log
    jest.clearAllMocks();
    produtosController = new ProdutosController();
  });

  it('should initialize correctly', () => {
    expect(console.log).toHaveBeenCalledWith('Produto Iniciado');
  });

  it('should log "Compra de Produto" when comprar is called', () => {
    produtosController.comprar();
    expect(console.log).toHaveBeenCalledWith('Compra de Produto');
  });

  it('should log "Compra de Produto" when devolver is called', () => {
    produtosController.devolver();
    expect(console.log).toHaveBeenCalledWith('Compra de Produto'); // Note que o log é o mesmo do método comprar. Isso está correto?
  });
});

// Mocking global console.log
global.console = {
  log: jest.fn()
  // ... outras propriedades do console
} as any;
