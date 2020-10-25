import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: [ true, 'Book title is required' ]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
} );