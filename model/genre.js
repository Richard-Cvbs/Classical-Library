const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    fiction: { type: Boolean, required: true },
  },
);

// Virtual for book's URL
BookSchema
  .virtual('url')
  .get(function () {
    return `/catalog/genre/${this._id}`;
  });

// Export model
module.exports = mongoose.model('Genre', BookSchema);
