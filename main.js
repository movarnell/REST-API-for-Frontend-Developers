import './style.css'
import javascriptLogo from './javascript.svg'

import getData from './API/get.js' // Import the getData function

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${javascriptLogo}" alt="JavaScript Logo" width="200" />
  </div>
`



// Fetch and display data in the console
const PORT = 3000; //NOTE: Replace with your API PORT
const URL = `http://localhost:${PORT}/users`; //NOTE: Replace with your API URL
// Below we actually call the getData function and pass in the URL of the API. We then use the 'then' method to log the data to the console. This is a simple way to display the data in the console. You could also use the data as a prop in a functional component.
getData(URL).then(data => console.log(data));
