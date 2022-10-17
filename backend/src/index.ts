import * as dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import CONFIG from "./config/config.js";

dotenv.config();
colors.enable();

const { Schema, model, connect } = mongoose;

const mongoConnection: string = `mongodb://${CONFIG.DB.MONGODB_USER}:${CONFIG.DB.MONGODB_PASS}@${CONFIG.DB.MONGODB_HOST}:${CONFIG.DB.MONGODB_PORT}/store?authSource=admin`;

const docSchema = new Schema<any>({}, { strict: false });
const Doc = model<any>("Document", docSchema);

async function mongoConnectionTest() {
  await connect(mongoConnection).catch(() => {
    console.log("[server] error during MongoDB connection".red);
    return process.exit(1);
  });
  console.log("[server] MongoDB connection successful".magenta);
}

mongoConnectionTest();
