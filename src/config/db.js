import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected');   
    }
    catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // to exit process with failure
    }
};

//   const uri = process.env.MONGO_URI;
//   if (!uri) throw new Error('MONGO_URI missing');
//   await mongoose.connect(uri);
//   console.log('MongoDB connected');
