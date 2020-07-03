//const { json } = require("body-parser");

//const { cachedDataVersionTag } = require("v8");

/* Global Variables */
let apiKey = '&units=metric&appid=ee22042818f267436a4bbdd1ea761544';
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';



//const  bodyParser  = require('body-parser');
//const bodyParser = require('body-parser');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get api data function
const getWeather = async (baseURL, zipCode, api ) =>
{
  const res = await fetch(baseURL+zipCode+api)
  try{
      const data =await res.json();
      //console.log(data); //testing
      return data;
  }
  catch(error){
    console.log('error',error);
  }
}


//postWeather function
const postWeather = async(url='',data ={}) =>{
    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    }
    catch(error) {
        console.log('error',error);
        
    }
}

//update ui function
const updateUI = async () =>
{
    const request = await fetch('/all');
    try{
        const allData = await request.json();
    document.getElementById('date').textContent = allData.date;
    document.getElementById('temp').textContent = allData.temperature;
    document.getElementById('contennt').textContent = allData.userResponse;
    }catch(error){
        console.log('error',error);
        
    }
}

//event listner
document.getElementById('generate').addEventListener('click', updateDOM);
// event listner callback function
function updateDOM (e)
{
     console.log('event happend');
    const zip = document.getElementById('zip').value;
    const feel = document.getElementById('feelings').value;

    getWeather(baseURL,zip,apiKey)
    .then(function(data){
        console.log(data);
     postWeather('/all', {temperature:data.main.temp, date:d , userResponse:feel});
    })
    .then(updateUI)

}

 



   