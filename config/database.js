import mongoose from "mongoose";

export const database = async() => {
    try {
        console.log("Starting connection to Mongodb...");

        const response = await mongoose.connect("");

        console.log(`Connected succesfully to mongodb at : ${response.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection failed");

        process.exit(1);
    }
};