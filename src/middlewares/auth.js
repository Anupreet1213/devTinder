const adminAuth = (req, res, next) => {
  console.log("Authenticated");
  let isAuth = true;
  if (isAuth) {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
};

module.exports = {
  adminAuth,
};
