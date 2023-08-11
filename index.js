require('dotenv').config();

const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 5555;


// Import Dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');

//const connectToDB = require('./config/connectToDB');

// Create an express app
const app = express();

// Configure an express app
app.use(express.json());
app.use(cors());


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 


// Initial Functions




// Make API call


async function apiCall(){
    const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: {q: 'game of thr'},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
};

//apiCall();




