const text = "Hola Mundo";
const fruits = ["manzana", "banana", "melon"];

// Test a simple string -----
test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

// Test if an array contains a specifyc value -----
test("Tenemos una Banana en el array?", () => {
  expect(fruits).toContain("banana");
});

// Test a number more greater -----
test("El valor es mayor que ", () => {
  expect(10).toBeGreaterThan(9);
});

// Test a true value -----
test("Es verdadero", () => {
  expect(true).toBeTruthy();
});

// Test a callback -----

/**
 * @name reverseString
 * @description get a string and a function, set reverse the value of str
 * and excecute callback and pass new str
 * @param {*} str
 * @param {*} callback
 */
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probando un callback", () => {
  reverseString("Holii", (str) => {
    expect(str).toBe("iiloH");
  });
});

// Test a Promise -----

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

test("Probando una Promesa", () => {
  return reverseString2("Holii").then((string) => {
    expect(string).toBe("iiloH");
  });
});

test("Probando una Funcion asincrona con async y await", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));

// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
