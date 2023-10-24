const Journey = require('../models/Journey');
const Touristguide = require('../models/Touristguide');

async function getUtazasok(req, res) {
    try {
        const journeys = await Journey.find().populate('touristGuide');
        res.status(200).render('utazasok/utazasok.ejs', { journeys });
    } catch (error) {
        console.log(error.message);
    }
}

async function getFeltolt(req, res) {
    try {
        const vezetok = await Touristguide.find().lean();
        const touristGuides = [];

        vezetok.forEach((element) => {
            touristGuides.push({ id: element._id, nev: element.nev });
        });

        res.status(200).render('utazasok/feltoltes.ejs', { touristGuides });
    } catch (error) {
        console.log(error.message);
    }
}

async function putModosit(req, res) {
    try {
        const { id, destination, kep_1, kep_2, kep_3, kep_4, idegenvezeto } =
            req.body;

        const kepek = [];

        kepek.push(kep_1);
        kepek.push(kep_2);
        kepek.push(kep_3);
        kepek.push(kep_4);

        const touristGuide = await Touristguide.findOne({
            nev: idegenvezeto,
        }).lean();

        const journey = await Journey.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                destination: destination,
                images: kepek,
                touristGuide: touristGuide,
            }
        ).lean();
        res.status(200).json({ message: 'Sikeres módosítás!' });
    } catch (error) {
        console.log(error.message);
    }
}

async function getModosit(req, res) {
    try {
        const journey = await Journey.findById({
            _id: req.params.id,
        }).populate('touristGuide');

        const vezetok = await Touristguide.find().lean();
        const touristGuides = [];

        vezetok.forEach((element) => {
            touristGuides.push({ id: element._id, nev: element.nev });
        });

        res.status(200).render('utazasok/modositas.ejs', {
            journey,
            touristGuides,
        });
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteUtazas(req, res) {
    try {
        const { e } = req.body;
        const journey = await Journey.findByIdAndDelete({
            _id: e,
        }).lean();
        res.status(200).json({ message: 'Sikeres törlés!' });
    } catch (error) {
        console.log(error.message);
    }
}

async function postUtazas(req, res) {
    try {
        const { destination, kep_1, kep_2, kep_3, kep_4, idegenvezeto } =
            req.body;

        const kepek = [];

        kepek.push(kep_1);
        kepek.push(kep_2);
        kepek.push(kep_3);
        kepek.push(kep_4);

        const touristGuide = await Touristguide.findOne({
            nev: idegenvezeto,
        }).lean();

        const newJourney = new Journey({
            destination,
            images: kepek,
            touristGuide,
        });

        await newJourney.save();
        res.status(201).json({ message: 'Sikeres feltöltés!' });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getUtazasok,
    getFeltolt,
    putModosit,
    getModosit,
    deleteUtazas,
    postUtazas,
};
