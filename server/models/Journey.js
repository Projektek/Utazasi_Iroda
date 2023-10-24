const mongoose = require('mongoose');
const Touristguide = require('./Touristguide');

const journeySchema = new mongoose.Schema(
    {
        destination: {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        touristGuide: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Touristguide',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Journey', journeySchema);
