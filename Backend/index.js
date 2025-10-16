const express = require('express')
const {connectMongoDB} = require('./connection')
const app = express()
const PORT = 3000
const router = require('./routes/route')

const cors = require("cors");

app.use(cors({
  origin: "*", // or "http://192.168.66.167:5173" for stricter
  methods: ["GET", "POST"]
}));

connectMongoDB("mongodb+srv://vrundpatel:9sIzBwwqnqArChoj@cluster0.vvhrmgo.mongodb.net/scanNdine?retryWrites=true&w=majority")
.then(() => console.log('MongoDB connected'))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/scanNdine', router)

app.listen(PORT,"0.0.0.0", () => console.log('Server Started at Port:',PORT))