import { data } from "../data/data";

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  const planets = data.planets;
  let planetsArray = [];
  planets.filter((planet) => {
    let hasMoon = planet.moons;
    if (!hasMoon) {
      planetsArray.push(planet.name);
    }
  });
  return planetsArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
