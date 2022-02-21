const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  userId: {
    id: mongoose.Types.ObjectId,
    email: String,
  },
  message : { type: String },
  date: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

MessageSchema.set('toJSON', {getters: true, virtuals: true});

module.exports = mongoose.model('Message', MessageSchema)
