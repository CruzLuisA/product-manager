const { create, getAll, getOne, updateOne, deleteOne } = require('../controllers/item.controller');

const express = require('express');
const { createCollection } = require('../models/item.model');
const itemRouter = express.Router();


itemRouter
    .route('/items')
    .post(create)
    .get(getAll)

itemRouter
    .route('/items/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)



module.exports = itemRouter