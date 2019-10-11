//Verify token
const verifyToken = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Ckeck if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');  //Split at the space
    const bearerToken = bearer[1];   //Get token from array
    req.token = bearerHeader;   // Set the token
    //Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403); //Send status 
  }
};

module.exports = verifyToken;