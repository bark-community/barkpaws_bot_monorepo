import TelegramBot from 'node-telegram-bot-api';
import { executeTokenSwap, calculateSwapFee } from './swapService';

// Replace 'bark_telegram_bot_token' with the actual bot token
const token = 'bark_telegram_bot_token';

// Create a new instance of TelegramBot
const bot = new TelegramBot(token, { polling: true });

// Store user states for multi-step interactions
const userStates = new Map();

// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    bot.sendMessage(chatId, `Welcome to BarkPaws, ${firstName}! How can we assist you today?`);
});

// Handle the /help command
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Here are the available commands:\n- /start\n- /help\n- /swap\n- /status\n- /support\n- /settings\n- /resources\n- /stake\n- /governance');
});

// Handle the user's response to commands or multi-step interactions
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const currentState = userStates.get(chatId);

    if (currentState) {
        // Handle user's response based on the current action
        switch (currentState.action) {
            case 'swap':
                // Execute token swap with improved logic
                const { fromToken, toToken, amount, walletAddress } = currentState.data;
                const swapResult = await executeTokenSwap(fromToken, toToken, amount, walletAddress);
                if (swapResult.success) {
                    bot.sendMessage(chatId, `Token swap successful! Transaction ID: ${swapResult.txId}`);
                } else {
                    bot.sendMessage(chatId, `Failed to execute token swap: ${swapResult.error}`);
                }
                break;
            case 'status':
                // Add logic for checking trade status with user's response
                bot.sendMessage(chatId, 'Checking trade status...');
                break;
            // Add cases for other actions as needed
        }

        // Clear user state after handling the response
        userStates.delete(chatId);
    } else {
        // Handle other messages or commands
        const message = msg.text.toLowerCase();
        if (message.includes('/tokenswap')) {
            const [command, fromToken, toToken, amount, walletAddress] = message.split(' ');
            // Calculate swap fees with slippage tolerance
            const { minFee, maxFee } = calculateSwapFee(fromToken, toToken, amount);
            bot.sendMessage(chatId, `Initiating token swap from ${fromToken} to ${toToken} for amount ${amount} to wallet address ${walletAddress}. Estimated fees: Min: ${minFee}, Max: ${maxFee}`);
            // Save user state for token swap
            userStates.set(chatId, { action: 'swap', data: { fromToken, toToken, amount, walletAddress } });
        }
    }
});

console.log('BarkPaws Telegram Bot is running...');
