const getAllQuestions = (req, res, next) => {
  res
    .status(200)
    .json({
      message: "success"
    })
}

module.exports = {
  getAllQuestions
}