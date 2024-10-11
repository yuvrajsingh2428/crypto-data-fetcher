const cron = require('node-cron');
const fetchCryptoData = require('../services/fetchCryptoData');

// Schedule the Job to Run Every 2 Hours
const startCryptoJob = () => {
  cron.schedule('0 */2 * * *', () => {
    console.log('Fetching crypto data from CoinGecko...');
    fetchCryptoData();
  });
  console.log('Crypto data fetch job scheduled to run every 2 hours.');
};

module.exports = startCryptoJob;
