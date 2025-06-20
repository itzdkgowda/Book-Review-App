const User = require("../models/User");

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

module.exports = { getUser, updateUser };
