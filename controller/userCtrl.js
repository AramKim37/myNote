const useCtrl = {
  registerUser: (req, res) => {
    res.json({ msg: "Sign up Success" });
  },
  loginUser: (req, res) => {
    res.json({ msg: "Login a User" });
  },
};

module.exports = useCtrl;
