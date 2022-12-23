import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
// import User from "./models/User.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AfilliateStat.js";
// import {
// dataUser,
// dataProduct,
// dataProductStat,
// dataTransaction,
// dataOverallStat,
//   dataAffiliateStat,
// } from "./data/index.js";

/* CONFIGRATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;
const bootStrap = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
      (async () => {
        // await User.deleteMany();
        // User.insertMany(dataUser);
        // await Product.deleteMany();
        // Product.insertMany(dataProduct);
        // await ProductStat.deleteMany();
        // ProductStat.insertMany(dataProductStat);
        // await Transaction.deleteMany();
        // Transaction.insertMany(dataTransaction);
        // await OverallStat.deleteMany();
        // OverallStat.insertMany(dataOverallStat);
        // await AffiliateStat.deleteMany();
        // AffiliateStat.insertMany(dataAffiliateStat);
      })();
    })
    .catch((err) => console.log(`${err}`));
};

bootStrap();
