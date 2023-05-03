const express = require('express')
const app = express()
const port = process.env.Port||5000
const cors = require('cors')
const myData = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Muntasir Rifat')
})

app.get('/data', (req, res) => {
    res.send(myData);
  })

app.listen(port, () => {
  console.log(`port is: ${port}`)
})