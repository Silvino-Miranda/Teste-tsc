import { Required } from '../core/decorator/required.decorator';
import { ValidateProperties } from '../core/decorator/validate-properties.decorator';

@ValidateProperties
export class Produto {
  constructor(
    @Required public id: number,
    @Required public nome: string,
    @Required public preco: number,
    public estoque: number
  ) {}
}


