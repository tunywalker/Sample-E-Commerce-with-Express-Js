const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const path=require('path');

app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
//404 -> GET
const errorController = require('./controllers/errors');
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use(errorController);



app.listen(80,()=> {
 
console.log('listenin port 80');

});



