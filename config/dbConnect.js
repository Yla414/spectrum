const { default: mongoose } = require("mongoose")

const uri = process.env.MONGO

const dbConnect = () => {
    const conn = mongoose.connect()
}