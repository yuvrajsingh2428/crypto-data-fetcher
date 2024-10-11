# Crypto Data Fetcher

This project fetches the latest cryptocurrency data (Bitcoin, Matic, and Ethereum) such as price in USD, market capitalization, and 24-hour percentage change using the CoinGecko API and stores it in a MongoDB database. It runs every two hours as a background job and saves the data for future reference.

## Features

- Fetches current cryptocurrency prices for Bitcoin, Matic, and Ethereum.
- Stores price, market capitalization, and 24-hour change in MongoDB.
- Scheduled background job runs every two hours to update the data.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (using MongoDB Atlas)**
- **Mongoose**
- **CoinGecko API**

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14+)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- [Git](https://git-scm.com/)
  
### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yuvrajsingh2428/crypto-data-fetcher.git

2. **Navigate to the project folder:**
    cd crypto-data-fetcher
3. **Install dependencies:**
    npm install
4. **Set up the environment variables:**
    Create a .env file in the root of your project and add the following:
      MONGO_URI=<Your MongoDB Atlas Connection String>
      API_KEY=<Your CoinGecko API Key>
5. **Run the project:**
   npm start




