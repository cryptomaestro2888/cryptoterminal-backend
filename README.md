# CryptoTerminal Backend

This is the backend application for CryptoTerminal, a comprehensive platform designed to provide users with a clear understanding of the crypto market, focusing on outperforming segments and assets.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL (with Prisma ORM)
- Redis (for caching)
- CoinGecko API (for crypto data)

## Getting Started

### Prerequisites

- Node.js 18+ (LTS version recommended)
- npm 8+ or yarn 1.22+
- PostgreSQL 13+
- Redis 6+

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/cryptoterminal.git
   cd cryptoterminal/backend
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env` and fill in the required values:
   ```
   cp .env.example .env
   ```

4. Set up the database:
   ```
   npx prisma migrate dev
   ```

5. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

The server should now be running on `http://localhost:3001` (or the port specified in your .env file).

## Project Structure

```
backend/
├── prisma/              # Prisma schema and migrations
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├──