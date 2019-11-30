export function convertMarketcap(value) {
  if (value > 10 ** 12) {
    return `${Math.round(value / 10 ** 12 * 1000)/1000} T`;
  } else if (value > 10 ** 9) {
    return `${Math.round(value / 10 ** 9 * 1000)/1000} B`;
  } else if (value > 10 ** 6) {
    return `${Math.round(value / 10 ** 6 * 1000)/1000} M`;
  } else if (value > 10 ** 3) {
    return `${Math.round(value / 10 ** 3 * 1000)/1000} K`;
  }
  return value;
}
