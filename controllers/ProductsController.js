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
    const product = await Product.findOne({
      where: { title: bodyRequest.title },
    });
    if (product) {
      return res.status(409).json({ error: "Le produit existe déjà" });
    }
    await Product.create(bodyRequest);
    return res
      .status(201)
      .json({ error: null, message: "Produit ajouter avec succés" });
  }
  async updateOne(req, res) {}
  async deleteOne(req, res) {}
}
