const Users = require("../models/userModel");

const useCtrl = {
  registerUser: (req, res) => {
    try {
      res.json(req.body);
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: (req, res) => {
    try {
      res.json({ msg: "Login a User" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = useCtrl;
