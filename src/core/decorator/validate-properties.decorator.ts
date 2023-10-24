function isValid(value: any): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string' && value.trim() === '') return false;
  return true;
}

export function ValidateProperties(target: Function) {
  const original = target.prototype.constructor;

  function construct(constructor: new (...args: any[]) => any, args: any[]) {
    const instance = new constructor(...args);
    const className = instance.constructor.name; // Obter o nome da classe
    for (const key in instance) {
      if (!isValid(instance[key])) {
        console.debug(`[${className}] O campo ${key} é inválido.`);
        // throw new Error(`[${className}] O campo ${key} é inválido.`);
      }
    }
    return instance;
  }

  const newConstructor: any = function (...args: any[]) {
    return construct(original, args);
  };

  newConstructor.prototype = original.prototype;
  return newConstructor;
}
