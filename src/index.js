const cities = [
  "Ciudad de Mexico",
  "Bogota",
  "Lima",
  "Buenos Aires",
  "Guadalajara",
];

/**
 * @name randomString
 * @description This function return a city of an array
 * @returns string
 */
const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

/**
 * @name reverseString2
 * @description Promise get a string and a function, set reverse the value of str
 * and excecute callback and pass new str
 * @param {*} str
 * @param {*} callback
 */
const reverseString2 = (str) => {
  return new Promise((res, rej) => {
    if (!str) rej(Error("Error"));

    res(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
