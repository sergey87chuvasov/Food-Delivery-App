import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({
      success: true,
      message: 'Food Added',
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: 'Error',
    });
  }
};

// all food list
const listFood = async (req, res) => {
  const foods = await foodModel.find({});
  res.json({
    success: true,
    data: foods,
  });

  try {
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'Error!' });
  }
};

export { addFood, listFood };
