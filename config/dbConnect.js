const { default: mongoose } = require("mongoose")

const uri = process.env.MONGO_URI;

const dbConnect = () => {
    try {
        
        console.log('Database connected')
    } catch (error) {
        console.log('Databse error');
        throw new Error(error);
    }
}