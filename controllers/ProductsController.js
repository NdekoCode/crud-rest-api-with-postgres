import { addProductValidation } from "../libs/validations.js";
import Product from "../models/Product.js";
export default class ProductsController {
  async getAll(req, res) {}
  async getOne(req, res) {
    console.log(Product);
  }
  async createOne(req, res) {
    const bodyRequest = req.body;
    const { error } = addProductValidation(bodyRequest);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  }
  async updateOne(req, res) {}
  async deleteOne(req, res) {}
}
