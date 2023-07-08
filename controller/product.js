const Product = require("../model/products");

exports.getAll = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.created = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const replacement = req.body;
  try {
    const updated = await Product.findOneAndReplace(filter, replacement, {
      new: true,
    });
    res.status(201).json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Product.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(201).json(updated);
  } catch (error) {
    console.log(error);
    res.status(200).json(error);
  }
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Product.findByIdAndDelete({ _id: id }, { new: true });
    res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(200).json(error);
  }
};
