import moment from "moment";

export function convertTemp(temp, toString = true) {
  let f = ((temp - 273.15) * 9) / 5 + 32;
  return toString ? Math.round(f) + "°F" : Math.round(f);
}

export function getSunRiseOrFall(timestamp) {
  return moment(timestamp * 1000).format("LT");
}
