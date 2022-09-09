const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err, req, res, next) => {

  if (err.name === "SyntaxError") {
    err = new CustomError("Unexpected token", 400)
  }

  if (err.name === "ValidationError") {
    err = new CustomError(err.message, 400) // mongoose tarafından gelen mesaj
  }

  console.log(err.name, err.message, err.status)

  res
    .status(err.status || 500)
    .json({
      success: false,
      message: err.message
    })
}

module.exports = customErrorHandler;