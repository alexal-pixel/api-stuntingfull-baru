import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No token provided.",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        status: "error",
        message: "Failed to authenticate token.",
      });
    }

    req.userId = decoded.id_user;
    req.userRole = decoded.id_hak_akses;

    next();
  });
};

export const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.userRole !== requiredRole) {
      return res.status(403).json({
        status: "error",
        message: "Access denied. Insufficient permissions.",
      });
    }
    next();
  };
};
