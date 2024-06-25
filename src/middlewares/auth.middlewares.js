import jwt from 'jsonwebtoken';

export function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    res.send({error: 'Un-authorized'})
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      res.send({error: err.name})
    }
    res.send({error: 'Un-authorized'})
  }

  return next();
}
