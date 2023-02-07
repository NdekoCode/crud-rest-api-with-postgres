import { addProductValidation } from "../libs/validations.js";
import Product from "../models/Product.js";
export default class ProductsController {
  async getAll(req, res) {
    try {
      // On recupere tout saut le champ updatedAt et createdAt
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      return res.status(200).json(products || []);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getOne(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findByPk(id, {
        attributes: { exclude: ["updatedAt"] },
      });
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(404).json({ error: "Le produit est introuvable" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async createOne(req, res) {
    const bodyRequest = req.body;
    const { error } = addProductValidation(bodyRequest);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    try {
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
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateOne(req, res) {}
  async deleteOne(req, res) {}
}
