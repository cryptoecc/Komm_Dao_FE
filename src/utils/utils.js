export const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * Formats a number with thousand separators.
 * @param {number|string} value - The number or string to format.
 * @returns {string} - The formatted number as a string.
 */
export const formatNumber = (value) => {
  // 문자열일 경우 숫자로 변환
  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  // Intl.NumberFormat을 사용하여 숫자 포맷팅
  return new Intl.NumberFormat('en-US').format(numberValue);
};

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';
