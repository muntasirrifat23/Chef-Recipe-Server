const express = require('express')
const app = express()
const port = process.env.Port||5000



app.get('/', (req, res) => {
  res.send('Muntasir Rifat')
})

app.listen(port, () => {
  console.log(`port is: ${port}`)
})