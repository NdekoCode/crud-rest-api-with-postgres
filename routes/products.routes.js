import { Router } from "express";
import ProductsController from "../controllers/ProductsController.js";

const productRouter = Router();
const productsCTRL = new ProductsController();
productRouter.get("/", productsCTRL.getAll);
productRouter.get("/:id", productsCTRL.getOne);
productRouter.post("/add", productsCTRL.createOne);
productRouter.put("/update/:id", productsCTRL.updateOne);
productRouter.delete("/delete/:id", productsCTRL.deleteOne);
export default productRouter;
