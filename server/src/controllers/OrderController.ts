import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Order from "../models/Order";
import orderView from '../view/order_view';

export default {
  async index(request: Request, response: Response) {
    const ordersRepository = getRepository(Order);

    const orders = await ordersRepository.find();

    return response.json(orderView.renderMany(orders));
  },
}