/**
 * Format a number to a string with a plus sign if it is not a multiple of a divisor.
 * examples:
 * 6, 5 => +5
 * 10, 5 => +10
 * 11, 5 => +10
 */
export function formatNumber(base: number, divisor: number) {
    return base % divisor === 0 ? base : "+" + (base - (base % divisor));
}