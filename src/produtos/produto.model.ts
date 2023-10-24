import { ValidateProperties } from '../core/decorator/validate-properties.decorator';

@ValidateProperties
export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public estoque: number
  ) {}
}
