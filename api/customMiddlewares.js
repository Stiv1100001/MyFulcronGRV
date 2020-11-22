// * callable after passport.authenticate()
function adminMiddleware(req, res, next) {
  if (!req.user) {
    res.status(500).end()
    return
  }

  if (req.user.ruolo.length === 0) {
    res.status(403).end()
  } else {
    next()
  }
}

module.exports = {
  adminMiddleware,
}
