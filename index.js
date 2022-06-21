const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! sudah ada nodemon')
  console.log(`Example app listening on port ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})