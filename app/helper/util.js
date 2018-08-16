export function toFloat(value) {
  if (typeof value === 'string') {
    const fVal = parseFloat(value);
    if (typeof fVal === 'number' && !isNaN(fVal)) {
      return fVal;
    }

    return 1;
  }

  return value;
}

