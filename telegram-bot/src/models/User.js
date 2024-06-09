const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    telegramId: {
        type: String,
        unique: true
    },
    walletId: {
        type: String,
        unique: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
