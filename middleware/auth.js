const { getuser } = require("../jwtset");

async function check(req, res, next) {
  const cookie = req.cookies.uid;
  console.log(cookie)
  if (!cookie) return res.redirect("/login");

  const user = getuser(cookie);

  if (!user) return res.redirect("/login");
  req.user = user;
  console.log(req.user)
  next();
}

async function checkauth(req, res, next) {
  const cookie = req.cookies.uid;
  
  if (!cookie) return res.redirect("/login");

  const user = getuser(cookie);
  req.user = user;
  console.log(req.user)
  next();
}


module.exports = {
  check,
  checkauth
};
