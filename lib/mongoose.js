import mongoose
    from "mongoose";
async function ConnectToDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
export default ConnectToDb;