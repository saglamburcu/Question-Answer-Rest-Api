const User = require("../models/User");
const asyncErrorHandling = require("express-async-handler");

const register = asyncErrorHandling(async (req, res, next) => {

  console.log(req.body)

  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  })

  res
    .status(200)
    .json({
      message: "success",
      data: user
    })

})


module.exports = {
  register
}