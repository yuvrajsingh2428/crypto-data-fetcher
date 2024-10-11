// routes/cryptoRoutes.js
const express = require('express');
const Crypto = require('../models/crypto.model');

const router = express.Router();

// Route to check the stats

// Endpoint to get stats of a specific cryptocurrency
router.get('/stats', async (req, res) => {
    const coin = req.query.coin;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const cryptoData = await Crypto.findOne({ name: coin });

        if (!cryptoData) {
            return res.status(404).json({ error: 'Cryptocurrency not found' });
        }

        // Structure the response according to the specified format
        const response = {
            price: cryptoData.price_usd,
            marketCap: cryptoData.market_cap_usd,
            "24hChange": cryptoData.change_24h
        };

        res.json(response);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route for /deviation 
// Helper function to calculate standard deviation
const calculateStandardDeviation = (prices) => {
    const n = prices.length;
    if (n === 0) return 0; // Handle empty array
    const mean = prices.reduce((acc, price) => acc + price, 0) / n;
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / n;
    return Math.sqrt(variance);
};

// GET /deviation?coin=bitcoin
router.get('/deviation', async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin parameter is required' });
    }

    try {
        // Fetch the last 100 records for the requested coin
        const records = await Crypto.find({ name: coin })
            .sort({ timestamp: -1 }) // Sort by timestamp in descending order
            .limit(100);

        if (records.length === 0) {
            return res.status(404).json({ error: 'No data found for the specified coin' });
        }

        // Extract the price_usd values from the records, filtering out null values
        const prices = records.map(record => record.price_usd).filter(price => price !== null);

        // If there are no valid prices, return a deviation of 0
        if (prices.length === 0) {
            return res.json({ deviation: "0.00" });
        }

        // Calculate standard deviation
        const deviation = calculateStandardDeviation(prices);

        // Return the standard deviation
        res.json({ deviation: deviation.toFixed(2) });
    } catch (error) {
        console.error('Error fetching deviation:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
