export function snakeToCamelCase(snake: string): string {
    return snake.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }