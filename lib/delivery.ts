/**
 * Free delivery when the cart subtotal (EUR, same currency as Stripe) reaches this amount.
 */
export const FREE_DELIVERY_THRESHOLD_EUR = 50;

export function qualifiesForFreeDeliverySubtotalEur(subtotalEur: number): boolean {
  return subtotalEur >= FREE_DELIVERY_THRESHOLD_EUR - 1e-9;
}
