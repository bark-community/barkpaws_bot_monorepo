const { calculateSwapFee } = require('./utils');
const { executeTokenSwap } = require('./swapService');

// Function to handle token swap commands/messages
async function handleTokenSwap(bot, msg, userStates) {
    try {
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
    } catch (error) {
        // Handle errors and send error message to the user
        console.error('Error handling token swap:', error);
        bot.sendMessage(msg.chat.id, 'Oops! Something went wrong. Please try again later.');
    }
}

module.exports = { handleTokenSwap };
