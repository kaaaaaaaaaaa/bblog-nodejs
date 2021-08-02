const path= require('path');
const express = require('express');
const morgan= require('morgan');
const app = express();
const handlebars  = require('express-handlebars'); // thư viện đọc html 
const methodOverride = require('method-override') 
const port= 5500;


const db= require('./config/db')
// connect db
db.connect();
const route= require('./routes'); // trỏ vào thư mục routes
app.engine('hbs',handlebars({
    extname: 'hbs', // config đuôi file 'handlebars' =>'hbs'
    helpers:{ 
        sum: (a,b)=> a+b,  // định nghĩa ra hamef dùng trên ui handlebars
    }
})); // ==>sử dụng template engine là handlebars



app.use(express.static(path.join(__dirname, 'public'))); // cấu hình file tĩnh=> từ localhost:3000 có thể truy cập trực tiếp vào các file trong public  
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// override with POST having ?_method=...
app.use(methodOverride('_method')) // điều hướng chuyên method

app.set('view engine', 'hbs'); // đặt cho ứng dụng express là sưr dụng view engine là handlebars
// app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources','views'));
// console.log("path:",path.join(__dirname, 'views')); // path: E:\DEV\NODE JS\Blog\src\views


//  routes init 
route(app);

app.listen(port, ()=>console.log(`--Server Tui đang chạy port ${port}--`));