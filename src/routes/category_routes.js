const express = require('express');
const CategoryRoutes = express.Router();
const CategoryController = require('./../controllers/category_controller')

CategoryRoutes.post('/', CategoryController.createCategory);
CategoryRoutes.get('/', CategoryController.fetchCategory);
CategoryRoutes.get('/:id', CategoryController.fetchCategoryById)
module.exports = CategoryRoutes;