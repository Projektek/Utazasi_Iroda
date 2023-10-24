// Csomagok importálása
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Adatbázis csatlakozás
const dbConnect = require('./config/dbConnect');
dbConnect;

// Szerver beállítása
const app = express();
const PORT = process.env.PORT || 5000;

// Statikus mappa beállítása
app.use(express.static(path.join(__dirname, 'public')));

// CORS kezelése
const corsOptions = require('./config/corsOptions');
app.use(cors(corsOptions));

// Middleware-k
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { logger, logEvents } = require('./middlewares/logger');
app.use(logger);

// Route-ok
const rootRoutes = require('./routes/rootRoutes');
app.use('/', rootRoutes);
const utazasokRoutes = require('./routes/utazasokRoutes');
app.use('/utazasok', utazasokRoutes);
const idegenvezetokRoutes = require('./routes/idegenVezetokRoutes');
app.use('/idegenvezetok', idegenvezetokRoutes);

// 404 Not Found
app.all('*', (req, res) => {
    res.status(404).render('404.ejs');
});

// Hibakezelés
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

mongoose.connection.once('open', () => {
    // Szerver elindítása
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

mongoose.connection.on('error', () => {
    console.log(error);
    logEvents(
        `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
        'mongoErrLog.log'
    );
});
