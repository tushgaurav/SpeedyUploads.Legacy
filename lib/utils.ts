export function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function largeString(str: string) {
  return str.length > 20 ? str.slice(0, 20) + "..." : str;
}
