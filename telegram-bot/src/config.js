require('dotenv').config();

module.exports = {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    mongoUri: process.env.MONGO_URI,
    barkDevSwapApi: process.env.BARK_DEV_SWAP_API,
    solanaTradeStatusApi: process.env.SOLANA_TRADE_STATUS_API,
};
