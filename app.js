const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')

const MONGO_URL = 'mongodb://localhost:27017/test'

main().then(() => { 
    console.log('Connected to MongoDB')
}).catch(err => {
    console.error(err)
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`)
});