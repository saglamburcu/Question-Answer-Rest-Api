const register = (req, res, next) => {
  res
    .status(200)
    .json({
      message: "success"
    })
}

module.exports = {
  register
}