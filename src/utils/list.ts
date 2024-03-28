export function listEqual<T>(list1: T[], list2: T[]): boolean {
  if (list1.length !== list2.length) {
    return false;
  }
  return list1.every((item) => list2.includes(item));
}

export function listEqualStrict<T>(list1: T[], list2: T[]): boolean {
  if (list1.length !== list2.length) {
    return false;
  }
  return list1.every((item, index) => item === list2[index]);
}
