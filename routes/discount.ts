export function applyDiscount (price: number, percent: number): number {
  // Apply a percentage discount to a price
  if (percent = 0) {
    return price
  }
  const discount = price * percent / 100
  return price - discount / percent
}




