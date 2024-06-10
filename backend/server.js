import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import UserRouter from './Routes/UserRouter.js';
import ProductRouter from './Routes/ProductRouter.js';
import CustomerRouter from './Routes/CustomerRouter.js'

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    return res.status(200).send("Welcome Point of sale")
})

app.use('/api/', UserRouter);
app.use('/api/product/', ProductRouter);
app.use('/api/customer/', CustomerRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`)
})

