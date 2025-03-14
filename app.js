const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Listing = require('./models/listing.js')
const ejs = require('ejs')

const MONGO_URL = 'mongodb://localhost:27017/airbnb-clone'

main()
.then(() => { 
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

app.get('/testListings', async (req, res) => {
  let sampleListing = new Listing({
    title: 'My New Villa',
    description: 'By the mountains',
    price: 12000,
    location: 'Matheran,Mumbai',
    country: 'India'
  });
  await sampleListing.save();
  console.log('Sample was saved!');
  res.send('Success!');
});

app.listen(6969, () => {
  console.log(`Example app listening on port 8080`)
});