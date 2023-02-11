import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401).json({ message: "invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "not authorized g" });
    return;
  }
};

// compare password with hash
export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

// hash the password
export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};
