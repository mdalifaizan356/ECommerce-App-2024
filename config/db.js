import mongoose from "mongoose";
import colors from "colors";

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb Database ${con.connection.host}`.bgMagenta. white);

    }
    catch(error){
        console.log(`Error In Mongodb ${error}`.bgRed.white);

    }
};
export default connectDB;