import './style.css';
import _ from 'lodash';
import logo7 from './logo7.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
  
    element.innerHTML = _.join(['Hello', 'Tables'], ' ');

    var myIcon = new Image();
    myIcon.src = logo7;

   element.appendChild(myIcon);

  
    return element;
  }




  document.body.appendChild(component());
  