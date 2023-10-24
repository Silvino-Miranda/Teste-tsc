import 'reflect-metadata'; // Se estiver usando reflect-metadata

// Importe o decorador ValidateProperties
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

  it('should throw an error if a string property is null', () => {
    expect(() => new TestClass(null, 123)).toThrowError('O campo prop1 é inválido.');
  });

  it('should throw an error if a number property is null', () => {
    expect(() => new TestClass('test', null)).toThrowError('O campo prop2 é inválido.');
  });

  it('should throw an error if a string property is undefined', () => {
    expect(() => new TestClass(undefined, 123)).toThrowError('O campo prop1 é inválido.');
  });

  it('should throw an error if a string property is an empty string', () => {
    expect(() => new TestClass('', 123)).toThrowError('O campo prop1 é inválido.');
  });

  it('should not throw an error if all properties are valid', () => {
    expect(() => new TestClass('test', 123)).not.toThrow();
  });
});



