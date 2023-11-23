import mongoose from "mongoose";

const dbConn = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/filmflix");
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};
export default dbConn;
