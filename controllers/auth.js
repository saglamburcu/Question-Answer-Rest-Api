const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");

const register = async (req, res, next) => {

  const name = "User2";
  const email = "user2@gmail.com";
  const password = "1111";

  try {
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
  } catch (err) {
    return next(err) // Eğer bir hata yakalanırsa bunu next(err) ile customErrorHandler middleware'ine gönderiyoruz.
  }

}


module.exports = {
  register
}