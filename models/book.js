const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    googleid: {
      type: String,
      unique: true,
    },
    subtitle: String,
    authors: [String],
    description: String,
    image: {
      type: String,
      default: "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png",
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
  });

  module.exports = mongoose.model('Book', bookSchema);
