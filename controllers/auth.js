const User = require("../models/User");

const register = async (req, res, next) => {

  const name = "User2";
  const email = "user2@gmail.com";
  const password = "111111";

  const user = await User.create({
    name: name,
    email: email,
    password: password
  })

  res
    .status(200)
    .json({
      message: "success",
      data: user
    })
}

module.exports = {
  register
}