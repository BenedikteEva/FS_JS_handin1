
const fetch = require("node-fetch");

/* let swappiPromises = [];
for (let i = 0; i < 50; i++) {
  const p = fetch("http://swapi.co/api/people/" + i).then(res => res.json()) //+1 henter en mere osv
  swappiPromises.push(p);
}
Promise.all(swappiPromises)
  .then(all => {
    const names = all.map(person => person.name).join(", ");
    console.log(names);
  })
 */
const URL = 'https://swapi.co/api/people/'



async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  try {
 

    const n = await fetch(URL + id).then(res => res.json());
    const f = await fetch(n.films[0]).then(res => res.json());
    const s = await fetch(f.species[0]).then(res => res.json());
    const p = await fetch(s.homeworld).then(res => res.json());
    return (
      "Name: " +
      n.name +
      ", Title: " +
      f.title +
      ", Specie: " +
      s.name +
      ", Planet: " +
      p.name
    );
  } catch (err) {
    console.log(err);
  }
}



// * * * * * * *

let starWarsInfo2 = getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
starWarsInfo2.then(function(result) {
  console.log("Med await: " + result+ "  Jeps GraphQL is cool");
});