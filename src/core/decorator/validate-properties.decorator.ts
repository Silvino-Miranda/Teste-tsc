export function ValidateProperties(target: Function) {
  const original = target.prototype.constructor;

  function construct(constructor: new (...args: any[]) => any, args: any[]) {
    const instance = new constructor(...args);
    for (const key in instance) {
      const value = instance[key];
      if (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '')
      ) {
        throw new Error(`O campo ${key} é inválido.`);
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
