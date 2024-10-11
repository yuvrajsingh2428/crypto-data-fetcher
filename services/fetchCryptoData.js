const fetch = require('node-fetch');
const Crypto = require('../models/crypto.model.js');
require('dotenv').config(); // Load environment variables from .env file

// Use the API key from environment variable
const API_KEY = process.env.COINGECKO_API_KEY;

const fetchCryptoData = async () => {
  try {
    const ids = ['bitcoin', 'matic-network', 'ethereum'];
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=usd`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': API_KEY,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    // Loop through each cryptocurrency and save to MongoDB
    for (let id of ids) {
      const price_usd = data[id].usd; // Get price in USD
      // Market cap and 24h change are not included in this response, so set them as null or undefined
      const market_cap_usd = null; // Change as necessary if you find another way to fetch it
      const change_24h = null; // Change as necessary if you find another way to fetch it

      const crypto = new Crypto({
        name: id,
        symbol: id.toUpperCase(),
        price_usd,
        market_cap_usd,
        change_24h,
      });

      await crypto.save();
      console.log(`Saved ${id} data to MongoDB.`);
    }
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
};

module.exports = fetchCryptoData;
