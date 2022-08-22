//Router for Orders
const router = require('express').Router();
let Order = require('../models/orders.model');

router.route('/').get((req, res) => {
    Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post a new order, but not in specification for problem, this is for me to test
//first time using this style, used to Sql
router.route('/add').post((req, res) => {
    const orderID = req.body.Id;
    const orderMessage = req.body.Message;

    const newOrder = new Order({Id, Message});

    newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update Order by ID
router.route('/update/:Id').post((req, res) =>{
    Order.findById(req.params.Id)
    .then(exercise => {
        Order.Id = req.body.Id;
        Order.Message = req.body.Message;

        Order.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 