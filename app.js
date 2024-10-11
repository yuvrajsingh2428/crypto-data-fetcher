require('dotenv').config();
const express = require('express'); 
const connectDB = require('./config/db');
const startCryptoJob = require('./jobs/cryptoJob');
const cryptoRoutes = require('./routes/crypto.routes.js'); 

// Create an instance of Express
const app = express(); 


connectDB();


startCryptoJob();


const fetchCryptoData = require('./services/fetchCryptoData');
fetchCryptoData();

// Middleware 
app.use(express.json()); 


app.use('/api', cryptoRoutes); 


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
