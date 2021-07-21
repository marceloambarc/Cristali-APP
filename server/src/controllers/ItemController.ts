import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Item from "../models/Item";
import itemView from '../view/item_view';

export default {
  async index(request: Request, response: Response){
    const itemsRepository = getRepository(Item);

    const items = await itemsRepository.find();

    return response.json(itemView.renderMany(items));
  },

  async create(request: Request, response: Response){
    try{

      const {
        itemname,
        price,
        quantity
      } = request.body;

      const itemsRepository = getRepository(Item);

      const data = {
        itemname,
        price,
        quantity
      }

      const schema = Yup.object().shape({
        itemname: Yup.string().notRequired(),
        price: Yup.string().required(),
        quantity: Yup.number().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const item = itemsRepository.create(data);

      await itemsRepository.save(item);

      return response.status(201);

    }catch(err){
      return response.status(400).json({ "erro":err });
    }
  }
}