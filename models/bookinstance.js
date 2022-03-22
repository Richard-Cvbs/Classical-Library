const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, // reference to the associated book
    imprint: { type: String, required: true },
    status: {
      type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance',
    },
  },
);

// Virtual for bookinstance's URL
BookInstanceSchema
  .virtual('url')
  .get(function () {
    return `/catalog/bookinstance/${this._id}`;
  });

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
