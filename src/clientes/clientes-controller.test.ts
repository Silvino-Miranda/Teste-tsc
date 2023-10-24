import { ClientesController } from './clientes-controller';
import { ProdutosController } from '../produtos/produtos-controller';

jest.mock('../produtos/produtos-controller'); // Mocking ProdutosController
// Mockar console.log
jest.spyOn(console, 'log').mockImplementation(() => {});

describe('ClientesController', () => {
  let clientesController: ClientesController;
  let mockProdutosController: jest.Mocked<ProdutosController>;

  beforeEach(() => {
    mockProdutosController = new ProdutosController() as jest.Mocked<ProdutosController>;
    clientesController = new ClientesController();
  });

  // Limpar todos os mocks após cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize correctly', () => {
    expect(console.log).toHaveBeenCalledWith('Clientes Iniciado');
    expect(clientesController.produtosController).toBeDefined();
  });

  it('should call comprar method in ProdutosController when comprar is called', () => {
    const clientesController = new ClientesController();
    clientesController.comprar();

    // Acessar a instância mockada de ProdutosController e verificar se o método comprar foi chamado
    expect(clientesController.produtosController.comprar).toHaveBeenCalled();
  });

  it('should call comprar method in ProdutosController when comprar is called', () => {
    const clientesController = new ClientesController();
    clientesController.comprar();
    expect(clientesController.produtosController.comprar).toHaveBeenCalled();
  });

  it('should call devolver method in ProdutosController when devolver is called', () => {
    const clientesController = new ClientesController();
    clientesController.devolver();
    expect(clientesController.produtosController.devolver).toHaveBeenCalled();
  });
});
