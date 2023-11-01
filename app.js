const express = require("express");
const config = require('./config');

const app = express();
const prdctRoute = require('./routes/productRoutes');
const PORT = 3000;
app.use(express.json());

app.use('/api/products',prdctRoute);

app.listen(PORT ,()=>{
    console.log(`listening on http://localhost:${PORT}`);
})

