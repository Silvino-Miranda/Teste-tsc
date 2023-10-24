// required.decorator.ts
import 'reflect-metadata';

const REQUIRED_METADATA_KEY = Symbol('required');

export function Required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex?: number
): void {
  let existingRequiredFields: Array<string | symbol> =
    Reflect.getMetadata(REQUIRED_METADATA_KEY, target) || [];
  existingRequiredFields.push(propertyKey);
  Reflect.defineMetadata(REQUIRED_METADATA_KEY, existingRequiredFields, target);
}

export function getRequiredFields(target: Object): Array<string | symbol> {
  return Reflect.getMetadata(REQUIRED_METADATA_KEY, target) || [];
}
