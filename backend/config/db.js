const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adminUser:<Academicweapon@2025>@topgardenwebsite.oteka.mongodb.net/?retryWrites=true&w=majority&appName=TopGardenWebsite", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;