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
}