import menu from "../models/menu.js";

export const getAllRecipes = async(req, res) => {
  try {
    const getAllRecipes = await menu.find({});
    res.status(200).json({success:true , message:'fetched all the recipes' , data:getAllRecipes});
  } catch (error) {
    console.log(error);
    res.status(404).json({success:false , message:"Failed to fetch all recipes"});
  }
};

export const createMenu = async(req , res) => {
   try {
      const newRecipe = new menu(req.body);
      const saveRecipe = await newRecipe.save();
      res.status(200).json({success:true , message:"recipe created successfully",data:saveRecipe});
   } catch (error) {
      console.log("Error while saving recipe" + saveRecipe);
      res.status(500).json({success:false , message:'failed to create the recipes'});
   }
}