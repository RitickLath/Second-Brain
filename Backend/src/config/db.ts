import mongoose from "mongoose";

const DatabaseConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASEURL, {});
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to database:");
    throw new Error("Database connection failed");
  }
};

export default DatabaseConnect;
