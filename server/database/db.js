import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();


const Connection = async () => {
    const URL=process.env.MONGODB_URL;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;