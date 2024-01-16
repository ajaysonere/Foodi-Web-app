import mongoose from 'mongoose';
import 'dotenv/config';

const connection = async() => {
   try {
      const connect = await mongoose.connect(process.env.MONGO_URL);
      
      if (!connect) {
        throw new Error("Failed to connect to the database");
      }
      
      console.log("Database connected succesffully");
       
   } catch (error) {
     console.log(error);
   }
}

export default connection;