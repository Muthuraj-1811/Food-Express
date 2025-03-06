import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import restaurants from './data/restaurants.js';
import User from './models/userModel.js';
import Restaurant from './models/restaurantModel.js';
import Order from './models/orderModel.js';

dotenv.config();

mongoose.connect("mongodb+srv://root:root@cluster0.jiaus.mongodb.net/foodshop?retryWrites=true&w=majority&appName=Cluster0")
// mongoose.connect("mongodb://localhost:27017")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const importData = async () => {
  try {
    // Clear existing data
    await Order.deleteMany();
    await Restaurant.deleteMany();
    await User.deleteMany();

    // Import users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Import restaurants
    const sampleRestaurants = restaurants.map(restaurant => {
      return { ...restaurant };
    });
    await Restaurant.insertMany(sampleRestaurants);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Restaurant.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}