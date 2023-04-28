const mongoose = require("mongoose");
// const colors = require("colors");
const MONGO_URI ="mongodb+srv://arpit_manuja:Ki_UD5fvrbJTN82@cluster0.o7dtoad.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;