export default function formatCurrency(num) {
  // Check if num is a valid number
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Invalid Price';
  }

  // Format the valid number as currency
  return '$ ' + Number(num.toFixed(1)).toLocaleString() + ' TK ';
}
