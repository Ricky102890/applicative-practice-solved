import { data } from "../data/data";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithLowGravity(data) {
  let lowGravityPlanet = [];
  const planets = data.planets;
  planets.filter((planet) => {
    if (planet.gravity < 10) {
      lowGravityPlanet.push(planet.name);
    }
  });
  return lowGravityPlanet;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
