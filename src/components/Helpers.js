const convertTemp = (temp, toString = true) => {
  let f = ((temp - 273.15) * 9) / 5 + 32;
  return toString ? Math.round(f) + "°F" : Math.round(f);
};

export default convertTemp;
