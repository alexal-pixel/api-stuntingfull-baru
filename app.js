import express from "express";
import sequelize from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import hakaksesRoutes from "./routes/hakaksesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import armadaRoutes from "./routes/armadaRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database.");

    await sequelize.sync();
    console.log("Database & tables created!");

    app.use("/api", authRoutes);
    app.use("/api", hakaksesRoutes);
    app.use("/api", userRoutes);
    app.use("/api", vendorRoutes);
    app.use("/api", armadaRoutes);
    app.use("/api", driverRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

init();
