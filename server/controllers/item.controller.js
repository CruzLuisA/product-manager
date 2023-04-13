const Item = require("../models/item.model");

const create = (req, res) => {
  Item.create(req.body)
    .then((item) => res.status(201).json(item))
    .catch((err) => res.status(400).json(err));
};

const getAll = (req, res) => {
  Item.find()
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};

const getOne = (req, res) => {
  const { id } = req.params;
  Item.findById(id)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Item.findByIdAndUpdate(id, req.body)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Item.findByIdAndDelete(id)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
};

module.exports = { create, getAll, getOne, updateOne, deleteOne };
