import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

//create category

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
      return res
        .status(401)
        .send({ success: false, message: "name is required" });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already exists",
      });
    }

    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error,
      message: "error is category",
    });
  }
};

//update category

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: "false",
      message: "Error in updating Category",
      error,
    });
  }
};

//get all categories
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});

    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      error,
      message: "Error in getting all categories",
    });
  }
};

//single category

export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });

    if (category) {
      res.status(200).send({
        success: true,
        message: "Category found",
        category,
      });
    }

    res.status(404).send({
      success: true,
      message: "Category not found",
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      error,
      message: "Error in getting all categories",
    });
  }
};

//delete-category

export const deleteCategoryController = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const findCat = await categoryModel.findOne({ _id: id });

    console.log(findCat);

    if (id && findCat) {
      const category = await categoryModel.findByIdAndDelete(id);

      res.status(200).send({
        success: true,
        message: "item deleted",
      });
    } else {
      res.status(404).send({
        success: false,
        message: "item not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in deleting category",
    });
  }
};
