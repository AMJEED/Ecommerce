// server.js
const express = require('express');
const { default: mongoose } = require('mongoose');
const productRoutes = require('./src/routes/ProductRoute');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const app = express()
const uri = "mongodb+srv://Aqsa_majeed:e4BM5zUsCACGwiLf@cluster0.aebilcj.mongodb.net/"
async function connect(){

    try{
        await mongoose.connect(uri)
        console.log("Connected")
    }
    catch(error){
        console.log(error)
    }

}
connect();
app.use(cors({
    origin: 'http://localhost:3001'  // Only allow this origin to access your API
}));
app.use(express.json())
app.use('/products', productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
