const randomStrings = require("../index");

// Array of test to be excecuted
describe("Probar funcionalidades de nuestra funcion randomStrings", () => {
  // Test the type data of randomStrings returns
  test("Probar la funcionalidad del index.js", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  // Test if not exist a city on array
  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
