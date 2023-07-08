const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.getAll = (req, res) => {
  res.status(200).json(users);
};

exports.create = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const usersIndex = users.findIndex((p) => p.id === id);
  users.splice(usersIndex, 1, { ...req.body, id: id });
  res.status(201).json({ ...req.body, id: id });
};
exports.update = (req, res) => {
  const id = +req.params.id;
  const usersIndex = users.findIndex((p) => p.id === id);
  const user = users[usersIndex];
  users.splice(usersIndex, 1, { ...user, ...req.body });
  res.status(200).send("Updated Using Patch");
};

exports.deleteOne = (req, res) => {
  const id = +req.params.id;
  const usersIndex = users.findIndex((p) => p.id === id);
  const user = users[usersIndex];
  users.splice(usersIndex, 1);
  res.status(201).json(user);
};
