import axios from 'axios';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

class CoinGeckoService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async get(endpoint: string, params: Record<string, any> = {}) {
    try {
      const response = await axios.get(`${COINGECKO_BASE_URL}${endpoint}`, {
        params: { ...params, x_cg_demo_api_key: this.apiKey },
      });
      return response.data;
    } catch (error) {
      console.error('CoinGecko API Error:', error);
      throw error;
    }
  }

  async getGlobalMarketData() {
    return this.get('/global');
  }

  async getTopCoins(limit: number = 100) {
    return this.get('/coins/markets', {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: limit,
      page: 1,
      sparkline: false,
    });
  }

  // Add more methods as needed for other endpoints
}

export default CoinGeckoService;