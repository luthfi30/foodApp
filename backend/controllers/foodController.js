import foodModel from "../models/foodModel.js";
import fs from "fs";

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
    res.status(201).json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add food item" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch food items" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlinkSync(`./uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to delete food item" });
  }
};

export { addFood, listFood, removeFood };
