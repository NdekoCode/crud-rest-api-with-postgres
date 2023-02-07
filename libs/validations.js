import Joi from "joi";

export const addProductValidation = (data) => {
  const Schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(10).max(500),
    price: Joi.number().min(0).required(),
  });
  return Schema.validate(data);
};
