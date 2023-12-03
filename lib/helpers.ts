export function getColor(color: string, opacity?: number) {
  return `hsl(${color} / ${Number.isFinite(opacity) ? opacity : 1})`;
}

export function getAvatarFallback(name: string) {
  return name.at(0)?.toUpperCase();
}
