export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ASIR-${timestamp}-${random}`;
}
