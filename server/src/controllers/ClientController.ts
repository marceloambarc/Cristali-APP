import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Client from '../models/Client';
import clientView from '../view/client_view';

export default {
  async index(request: Request, response: Response) {
    const clientsRepository = getRepository(Client);

    const clients = await clientsRepository.find({
      relations: ['orders']
    });

    return response.json(clientView.renderMany(clients));
  },

  async show(request: Request, response: Response) {
    try{
      const { id } = request.params;

      const clientsRepository = getRepository(Client);

    
      const client = await clientsRepository.findOneOrFail(id, {
        relations: ['orders']
      }).then(() => {
        return response.json(clientView.render(client));
      }).catch(err => {
        return response.status(404).json({"erro": err});
      });
    }catch(err){
      return response.status(400).json({"erro": err});
    }
  }
}