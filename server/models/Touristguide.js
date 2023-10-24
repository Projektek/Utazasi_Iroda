const mongoose = require('mongoose');

const touristguideSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        kep: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Touristguide', touristguideSchema);
