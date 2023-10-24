import 'reflect-metadata'; // Se estiver usando reflect-metadata
import { ValidateProperties } from './validate-properties.decorator';

describe('ValidateProperties Decorator', () => {
  @ValidateProperties
  class TestClass {
    prop1: string;
    prop2: number;

    constructor(prop1: string, prop2: number) {
      this.prop1 = prop1;
      this.prop2 = prop2;
    }
  }

  // Mockar console.debug
  jest.spyOn(console, 'debug').mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log a debug message if a string property is null', () => {
    new TestClass(null, 123);
    expect(console.debug).toHaveBeenCalledWith('[TestClass] O campo prop1 é inválido.');
  });

  it('should log a debug message if a number property is null', () => {
    new TestClass('test', null);
    expect(console.debug).toHaveBeenCalledWith('[TestClass] O campo prop2 é inválido.');
  });

  it('should log a debug message if a string property is undefined', () => {
    new TestClass(undefined, 123);
    expect(console.debug).toHaveBeenCalledWith('[TestClass] O campo prop1 é inválido.');
  });

  it('should log a debug message if a string property is an empty string', () => {
    new TestClass('', 123);
    expect(console.debug).toHaveBeenCalledWith('[TestClass] O campo prop1 é inválido.');
  });

  it('should not log a debug message if all properties are valid', () => {
    new TestClass('test', 123);
    expect(console.debug).not.toHaveBeenCalled();
  });
});
