const PORT = 8000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())
app.get('/weather',(req,res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.619549&lon=-93.598022&units=imperial&appid=59ad6a36d943fe0a22d1fa0e88ba38ee';
    axios.get(url).then((response) => {
        res.json(response.data)
    })
})

app.get('/hi',(req,res) =>{
    res.json('hello');
})
app.listen(8000, () => console.log('Server is running on port '+PORT))