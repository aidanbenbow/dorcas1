
const express = require('express'),
app = express(),
dotenv = require('dotenv').config(),
port = process.env.PORT || 5000,
mongoose = require('mongoose'),
reportRouter = require('./routes/report')

mongoose.connect(process.env.DB_URL)

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('login')
})

app.use(express.urlencoded({ extended: false }))

app.use('/reports', reportRouter)

app.listen(port)