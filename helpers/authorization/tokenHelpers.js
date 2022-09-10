const sendJwtToClient = (user, res) => {
  // Generate JWT
  const token = user.generateJWTFromUser();

  const { JWT_COOKIE, NODE_ENV } = process.env;

  // Response
  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
      secure: NODE_ENV === "development" ? false : true
    })
    .json({
      success: true,
      access_token: token,
      data: {
        name: user.name,
        email: user.email
      }
    })

}

// token yerleştirilmiş mi yerleştirilmemiş mi
const isTokenIncluded = (req) => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
  )
}

const getAccessTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;
  const access_token = authorization.split(" ")[1];

  return access_token;
}

module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccessTokenFromHeader
}