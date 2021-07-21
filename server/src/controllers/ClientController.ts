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
    const { id } = request.params;
    const searchId = parseInt(id);

    const clientsRepository = getRepository(Client);
    
    clientsRepository.findOne({ id: searchId }, {
      relations: ['orders']
    }).then(res => {
      if(res === undefined){
        return response.status(404).json({"Erro": "NOT FOUND"});
      }else{
        return response.json(clientView.render(res));
      }
    }).catch(err => {
      return response.status(400).json({"Erro": err});
    });
  }
}