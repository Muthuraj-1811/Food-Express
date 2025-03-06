import Restaurant from '../models/restaurantModel.js';

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.json(restaurants);
};

// @desc    Get restaurant by ID
// @route   GET /api/restaurants/:id
// @access  Public
const getRestaurantById = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: 'Restaurant not found' });
  }
};

export { getRestaurants, getRestaurantById };