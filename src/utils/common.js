export function isEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.entries(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export function removeObjFromArray(array, objToRemove) {
  return array.filter((obj) => obj._id !== objToRemove._id);
}

export function getMaxValue(array = [], attr) {
  let maxValue = { count: 0, obj: {} };
  for (const val of array) {
    if (val?.[attr] > maxValue.count) {
      maxValue = { count: val?.[attr], obj: { ...val } };
    }
  }
  return maxValue;
}
