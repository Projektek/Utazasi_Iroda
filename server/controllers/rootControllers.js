function getRoot(req, res) {
    res.status(200).render('index');
}

module.exports = { getRoot };
