const express = require('express')
const app = express()
const port = process.env.Port||5000
const cors = require('cors')

const myData = require('./data.json');
const myDetails= require('./details.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send(myDetails);
})

app.get('/data', (req, res) => {
    res.send(myData);
  })

// app.get('/detail', (req,res)=>{
//     res.send(matchMedia);
// })

app.listen(port, () => {
  console.log(`port is: ${port}`)
})