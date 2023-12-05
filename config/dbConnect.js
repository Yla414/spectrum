const { default: mongoose } = require("mongoose")

const uri = process.env.MONGO_URI

const dbConnect = () => {
    const conn = mongoose.connect()
}