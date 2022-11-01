import bodyParser from 'body-parser';

import express from 'express';

import adminRouter from './routes/admin.js';
import shopRouter from   './routes/shop.js';



const app = express();

app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.use(adminRouter);



app.use('/', (req, res, next) => {
    console.log('this will always run');
    next();
})

// middleware 1
app.use((req, res, next) => {
    console.log('aaaa middleware'+req);
    next();
});

// middleware 2
app.use((req, res, next) => {
    console.log('bbb middleware '+req);
    next();
});


app.use(shopRouter);


//event listener (for each request):
app.listen(3000, (aa, bb) => {
    console.log('server ok ');
});
   
