const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
    Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const patientID = req.body.ID;
    const patientName = req.body.Name;
    const patientOrderID = req.body.OrderID;

    const newUser = new Patient({patientID, patientName, patientOrderID});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;