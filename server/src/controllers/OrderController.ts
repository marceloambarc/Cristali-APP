import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Order from "../models/Order";
import orderView from '../view/order_view';

export default {
  async index(request: Request, response: Response) {
    const ordersRepository = getRepository(Order);

    const orders = await ordersRepository.find({
      relations: ['items']
    });

    if(orders.length === 0){
      return response.status(204).json({'Vazio': 'Nenhuma ordem inserida.'});
    }else{
      return response.json(orderView.renderMany(orders));
    }
  },

  async show(request: Request, response: Response) {
      const { id } = request.params;
      const searchId = parseInt(id);
  
      const ordersRepository = getRepository(Order);
  
      const orders = await ordersRepository.find({where: { userId: searchId }, relations: ['items']});
  
      if(orders.length === 0){
        return response.status(404).json({'Vazio': 'Nenhuma ordem com este Parametro.'});
      }else{
        return response.json(orderView.renderMany(orders));
      }
  },

  async delete(request: Request, response: Response) {
    const ordersRepository = getRepository(Order);

    const order = await ordersRepository.delete({})

    return response.json(200);
  },

  async editCondition(request: Request, response: Response){
    const { code, condition } = request.body;
    const setCondition = parseInt(condition);

    const ordersRepository = getRepository(Order);

    const order = await ordersRepository.findOne({ where: { code: code } });
    if(order?.id != undefined){
      order.condition = setCondition;
      await ordersRepository.save(order);
      return response.status(204).json(order);
    }else{
      return response.json(404);
    } 
  },

  async create(request: Request, response: Response) {
    try {
      const {
        userId,
        token,
        code,
        totalprice,
        notes,
        client,
        items
      } = request.body;

      const ordersRepository = getRepository(Order);
        
      const data = {
        userId,
        token,
        code,
        timestamp: new Date(),
        totalprice,
        notes,
        condition: 0,
        client,
        items
      };
  
      const schema = Yup.object().shape({
        userId: Yup.number().required(),
        token: Yup.string().required(),
        code: Yup.string().required(),
        timestamp: Yup.date().default(() => new Date()),
        totalprice: Yup.string().required(),
        notes: Yup.string().required(),
        condition: Yup.number().default(() => 0),
        client: Yup.object().shape({
            nomefinalcli: Yup.string().required(),
            phone: Yup.string().notRequired(),
            email: Yup.string().notRequired(),
            notes: Yup.string().notRequired()
          }),
        items: Yup.array(
          Yup.object().shape({
            itemname: Yup.string().notRequired(),
            price: Yup.string().required(),
            quantity: Yup.number().required(),
          })
        )
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const orderRepository = ordersRepository.create(data);

      await ordersRepository.save(orderRepository);
    
      return response.status(201).json(orderRepository);
    }catch(err){
      return response.status(400).json({ "erro":err });
    }
  }
}