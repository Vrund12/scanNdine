require('dotenv').config()
const express = require('express')
const {connectMongoDB} = require('./connection')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/route')

const cors = require("cors");


app.use(cors({
  methods: ["GET", "POST"]
}));

connectMongoDB(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected')).catch((error)=>console.error("Error in DatabaseConnection",error));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/scanNdine', router)

app.listen(PORT, () => console.log('Server Started at Port:',PORT))