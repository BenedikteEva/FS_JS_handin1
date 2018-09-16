const URI = "https://swapi.co/api/people/";
 
async function fetchPerson(url){
 fetch(url).then(async  results => {
console.log('results  '+results)
    if (!results.ok) {
      throw Error('err  '+results.statusText);
    }
    return await results.json();

  }).then(async data => {
      console.log('data'+data)
      return await data
})}


async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URI+1);
  const person2 = await fetchPerson(URI+2);
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}
printNames();