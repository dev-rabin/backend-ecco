const CategoryModel = require('./../models/product_category')

const CategoryController = {

  createCategory: async (req, res) => {

    try {
      const categoryData = req.body;
      const newCategory = new CategoryModel(categoryData);
      await newCategory.save();

      res.json({ success: true, message: "Category created successfully!" });

    } catch (error) {
      res.json({ success: false, message: error.message })
    }

  },

  fetchCategory: async (req, res) => {
    try {
      const categories = await CategoryModel.find();
      res.json({ success: true, data: categories });

    } catch (error) {
      res.json({ success: false, message: error.message })

    }
  },

  fetchCategoryById: async (req, res) => {

    try {
      const id = req.params.id;
      const getId = await CategoryModel.findById(id);
      if(!getId){
        res.json({ success: false, message:'Category Not Found!' })
      } return res.json({ success: true, data: getId })
      
    } catch (error) {
      res.json({ success: false, message: error.message })
    }

  }
}

module.exports = CategoryController;