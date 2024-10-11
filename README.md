﻿# crypto-data-fetcher
Cryptocurrency Data Fetcher
This project fetches the latest prices of Bitcoin, Ethereum, and Matic from the CoinGecko API every 2 hours and stores the data in a MongoDB database.

Table of Contents
Features
Technologies Used
Installation
Usage
Environment Variables


Features
Fetch Crypto Data: The app fetches the latest prices of 3 cryptocurrencies (Bitcoin, Ethereum, and Matic) in USD.
Store in MongoDB: The fetched data is saved to a MongoDB database, including fields for:
Cryptocurrency name and symbol
Price in USD
(Optional) Market cap and 24-hour percentage change.
Scheduled Job: The fetching process runs automatically every 2 hours to keep data up-to-date.
Technologies Used
Node.js: Backend framework.
MongoDB: NoSQL database to store cryptocurrency data.
CoinGecko API: Third-party API to fetch real-time crypto data.
Mongoose: ODM for MongoDB to define schema and perform database operations.
Node-Cron: (Optional) For scheduling recurring jobs.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install dependencies:

bash
Copy code
npm install
Set up MongoDB by either:

Using a local MongoDB instance, or
Setting up a cloud database on MongoDB Atlas (recommended).
Create a .env file in the root directory and add the necessary environment variables (see below).

Usage
Run the Fetching Script:

To manually fetch the crypto data, run:

bash
Copy code
node scripts/fetchCryptoData.js
Automate Fetching Every 2 Hours:

To schedule the job to run automatically every 2 hours, integrate node-cron in your project or deploy the project on a platform with background job support (e.g., Heroku Scheduler, AWS Lambda).

Environment Variables
Create a .env file in the root of your project and include the following:

bash
Copy code
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-db-name
COINGECKO_API_KEY=your-api-key-here
Variables:

MONGODB_URI: The connection string for MongoDB (from Atlas or local).
COINGECKO_API_KEY: Your CoinGecko API Key. You can sign up on the CoinGecko Developer Portal to get one.
