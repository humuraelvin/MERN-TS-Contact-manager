import mongoose from "mongoose";


const dbconnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://elvinhumura:ozFRLj65PJ6dmwzo@cluster0.huok3f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to Mongodb successfully");
        
    } catch (error) {
        console.log("Error connectin to mongodb", error);
        
    }
}

export default dbconnection;