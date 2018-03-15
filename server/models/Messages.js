const mongoose = require('mongoose');

// Création du schéma pour les Users
const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
  userSocketID: String,
});

// Création du Model pour les Users
const MessageModel = mongoose.model('messages', MessageSchema);

module.exports = MessageModel;
