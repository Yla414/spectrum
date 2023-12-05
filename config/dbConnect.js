const { default: mongoose } = require("mongoose")

const uri = process.env.MONGO_URI;

const dbConnect = () => {
    try {
        
    } catch (error) {
        console.log();
        throw new Error(error);
    }
}