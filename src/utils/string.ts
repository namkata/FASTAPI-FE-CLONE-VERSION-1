export default function convertToCamelCase(input: string): string {
  let camelCase = input.replace(/^[_-]+/, '');
  camelCase = camelCase.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  camelCase = camelCase.charAt(0).toLowerCase() + camelCase.slice(1);
  return camelCase;
}

export function convertToKebabCase(input: string): string {
  let snakeCase = input.replace(/^[_-]+/, '');
  snakeCase = snakeCase.replace(/([A-Z])/g, '-$1').toLowerCase();
  return snakeCase;
}
