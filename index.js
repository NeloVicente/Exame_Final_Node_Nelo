const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let url='mongodb+srv://admin:abcd1234@cluster0.pikus.mongodb.net/Exame_Final?retryWrites=true&w=majority';
let mongoDB= process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.Promise=global.Promise;
let db = mongoose.connection;
const fornecedor=require('./route/fornecedor.route');
const compra=require('./route/compra.route');
const produto=require('./route/produto.route');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/fornecedor', fornecedor);
app.use('/compra', compra);
app.use('/produto', produto);
app.listen(8081, function(){
    console.log('http://localhost:8081/')
});
