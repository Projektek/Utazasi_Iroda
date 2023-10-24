require('dotenv').config();
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const image = './images/elso.jpg';

cloudinary.uploader
    .upload(image)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
