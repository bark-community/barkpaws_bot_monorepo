const axios = require('axios');

const initiateTokenSwap = async (req, res) => {
    try {
        // Extract swap details from request body
        const { fromToken, toToken, amount, walletAddress } = req.body;

        // Validate input parameters
        if (!fromToken || !toToken || !amount || !walletAddress) {
            return res.status(400).json({ message: 'Missing required parameters' });
        }

        // Call BarkPaws token swap API to initiate the swap
        const swapResponse = await axios.post(process.env.BARK_SWAP_API, {
            fromToken,
            toToken,
            amount,
            walletAddress
        });

        // Handle the response from the token swap API
        if (swapResponse.data.success) {
            // If the swap was successful, return a success response
            return res.status(200).json({ message: 'Token swap initiated successfully', txId: swapResponse.data.txId });
        } else {
            // If the swap failed, return an error response with the specific error message
            return res.status(400).json({ message: 'Failed to initiate token swap', error: swapResponse.data.error });
        }
    } catch (error) {
        console.error('Error initiating token swap:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { initiateTokenSwap };
