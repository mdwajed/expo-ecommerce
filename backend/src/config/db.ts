import * as mongoose from "mongoose";
import {env} from "./env.js";

export const connectDb=async (): Promise<void> => {
    try{
        const connection = await mongoose.connect(env.DB_URL!);
        console.log(`✅ Connected to MONGODB Successfully`);
    }catch (e) {
        console.log("❌ MONGODB Connection Error: " + e);
        process.exit(1);
    }
}