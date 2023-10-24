import { Main } from './main';
import { ClientesController } from './clientes/clientes-controller';
import { Produto } from './produtos/produto.model';

jest.mock('./clientes/clientes-controller'); // Mocking ClientesController
jest.mock('./produtos/produto.model'); // Mocking Produto

describe('Main', () => {
  beforeEach(() => {
    // Limpa todas as instâncias e chamadas para os mocks
    jest.clearAllMocks();
  });

  it('should initialize correctly', () => {
    const mainInstance = new Main();
    expect(console.log).toHaveBeenCalledWith('Sistema Iniciado');
    expect(ClientesController.prototype.comprar).toHaveBeenCalled();
    // ... outros testes relacionados à inicialização ...
  });

  it('should calculate the sum of two numbers', () => {
    const result = Main.soma(5, 3);
    expect(result).toBe(8);
  });

  it('should calculate the half of a number', () => {
    const result = Main.empresa(5);
    expect(result).toBe(2); // 5 / 2 = 2.5, mas usamos Math.floor, então o resultado é 2
  });
});

// Mocking global console.log and console.error
global.console = {
  log: jest.fn(),
  error: jest.fn()
  // ... outras propriedades do console
} as any;
