import './style.css';
import _ from 'lodash';
import logo7 from './logo7.png';
import Data from './data.xml';
import 'bootstrap/dist/css/bootstrap.css'
import 'babel-polyfill';
class Person {
  constructor(fn, ln, sp) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = sp;
  }
}
const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = logo7;

  element.appendChild(myIcon);
 
  return element;
}

function createComponents(tag, id){
const myComponent= document.createElement(tag);
myComponent.setAttribute("id",id);
return myComponent;
}



document.body.appendChild(component());
document.body.appendChild(createComponents("table", "Table"));
function makeTable(data) {

  let headers = [];
  headers = _.keys(data[0]);
  console.log(headers)
  const headerGenerat = headers.map(head => {
    return (


      ` <td>${head}</td>`

    )
  })
   console.log(data)

   let great=_.keys(data).sort().reduce((o, k) => (o[k] = data[k], o), {});
console.log(great)


     const dataGenerat = _.map(data)
      
  document.getElementById('Table').innerHTML =
    `  <thead><th>${headerGenerat}</th>  </thead>
   <tbody><tr> ${dataGenerat}</tr></tbody>`;

}


makeTable(persons);

