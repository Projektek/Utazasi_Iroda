const Touristguide = require('../models/Touristguide');
const Journey = require('../models/Journey');

async function getIdegenvezetok(req, res) {
    try {
        const touristGuides = await Touristguide.find().lean();
        res.status(200).render('idegenvezetok/idegenvezetok.ejs', {
            touristGuides,
        });
    } catch (error) {
        console.log(error.message);
    }
}

function getFeltolt(req, res) {
    try {
        res.status(200).render('idegenvezetok/feltoltes.ejs');
    } catch (error) {
        console.log(error.message);
    }
}

async function getModosit(req, res) {
    try {
        const touristGuide = await Touristguide.findById({
            _id: req.params.id,
        }).lean();
        res.status(200).render('idegenvezetok/modositas.ejs', { touristGuide });
    } catch (error) {
        console.log(error.message);
    }
}

async function putModosit(req, res) {
    try {
        const { id, nev, kep } = req.body;
        const touristGuide = await Touristguide.findByIdAndUpdate(
            {
                _id: id,
            },
            { nev: nev, kep: kep }
        ).lean();
        res.status(200).json({ message: 'Sikeres módosítás!' });
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteIdegenvezeto(req, res) {
    try {
        const { e } = req.body;

        const journeys = await Journey.find().lean();

        const toroltGuide = await Touristguide.findByIdAndDelete({
            _id: e,
        }).lean();

        const nonameTouristGuide = await Touristguide.findOne({
            nev: 'Még nincs idegenvezetője',
        }).lean();

        await Journey.updateMany(
            { touristGuide: toroltGuide },
            { $set: { touristGuide: nonameTouristGuide } }
        );

        res.status(200).json({ message: 'Sikeres törlés!' });
    } catch (error) {
        console.log(error.message);
    }
}

async function postIdegenvezetok(req, res) {
    try {
        const { nev, kep } = req.body;
        const newTouristguide = new Touristguide({ nev, kep });
        await newTouristguide.save();
        res.status(201).json({ message: 'Sikeres feltöltés!' });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getIdegenvezetok,
    getFeltolt,
    getModosit,
    putModosit,
    deleteIdegenvezeto,
    postIdegenvezetok,
};
