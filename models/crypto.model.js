const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    symbol: { type: String, required: true },
    price_usd: { type: Number, required: true, min: 0 },
    market_cap_usd: { type: Number, min: 0 },
    change_24h: { type: Number },
    timestamp: { type: Date, default: Date.now, index: true },
  });

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;
