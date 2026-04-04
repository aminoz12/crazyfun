/**
 * Livraison offerte lorsque le sous-total panier / commande (hors livraison)
 * atteint ce montant en EUR — aligné avec Stripe (devise EUR).
 */
export const FREE_DELIVERY_THRESHOLD_EUR = 50;

export function qualifiesForFreeDeliverySubtotalEur(subtotalEur: number): boolean {
  return subtotalEur >= FREE_DELIVERY_THRESHOLD_EUR - 1e-9;
}
