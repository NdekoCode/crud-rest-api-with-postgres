import { Router } from "express";

const productRouter = Router();
productRouter.get("/getAll");
productRouter.get("/getOne");
productRouter.post("/createOne");
productRouter.put("/updateOne");
productRouter.delete("/deleteOne");
export default productRouter;
