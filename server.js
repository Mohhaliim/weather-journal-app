// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;
const server = app.listen(port,listening);
function listening () {
    console.log('it\'s working'+port);
}

//get is tested and working properly 
app.get('/all', (req,res) => {  
    res.send(projectData);  
});

// post mockup 

app.post('/all',(req,res) =>
{
    let data = req.body;
    projectData['temperature']= data.temperature;
    projectData['date']= data.date;
    projectData['userResponse']= data.userResponse;
    res.send(projectData);
});