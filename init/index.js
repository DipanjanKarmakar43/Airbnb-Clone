const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/airbnb-clone";

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Ensure images are strings
  const formattedData = initData.data.map((item) => ({
    ...item,
    image: item.image.url, // Extract only the URL if your schema expects a string
  }));

  await Listing.insertMany(formattedData);
  console.log("Data was initialized");
};

initDB();
