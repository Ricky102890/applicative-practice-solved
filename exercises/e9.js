import { data } from "../data/data";

// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getEarthData(data) {
  const planets = data.planets;
  let isEarth;
  planets.filter((planet) => {
    if (planet.name === "Earth") {
      isEarth = new Object(planet);
    }
  });
  return isEarth;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
