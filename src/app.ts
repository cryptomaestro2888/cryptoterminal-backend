import express from 'express';
import redisClient from './services/redis';
import dotenv from 'dotenv';
import CoinGeckoService from './services/coingecko';

dotenv.config();

const app = express();

const coinGeckoApiKey = process.env.COINGECKO_API_KEY;

if (!coinGeckoApiKey) {
  console.error('CoinGecko API key is not set in the environment variables');
  process.exit(1);
}

const coinGeckoService = new CoinGeckoService(coinGeckoApiKey);

app.get('/api/market-overview', async (req, res) => {
  try {
    const marketData = await coinGeckoService.getGlobalMarketData();
    res.json(marketData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

app.get('/api/top-coins', async (req, res) => {
  try {
    const topCoins = await coinGeckoService.getTopCoins(20);
    res.json(topCoins);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top coins' });
  }
});

// ... rest of your app setup

export default app;