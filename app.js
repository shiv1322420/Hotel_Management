const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbConnection=require('./config/databaseConnection');
const userRoute=require('./routes/user-route');
const adminRoute=require('./routes/admin-route');
const port = 3006;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin',adminRoute);
app.use('/user',userRoute);
module.exports=app;
app.listen(port, () => {
    console.log(`Server is listening on : ${port}`);
});

