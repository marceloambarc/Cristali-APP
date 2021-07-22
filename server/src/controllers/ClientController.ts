import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Client from '../models/Client';
import clientView from '../view/client_view';

export default {
  async index(request: Request, response: Response) {
    const clientsRepository = getRepository(Client);

    const clients = await clientsRepository.find();

    if(clients.length === 0){
      return response.status(204).json({'Ops!': 'Nenhum Cliente cadastrado'});;
    }else{
      return response.json(clientView.renderMany(clients));
    }
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const searchId = parseInt(id);

    const clientsRepository = getRepository(Client);
    
    const client = await clientsRepository.findOne({ id: searchId });

    if(client != undefined){
      return response.status(200).json(clientView.render(client));
    }else{
      return response.status(404).json({"Erro": "NOT FOUND"});
    }
  },

  async create(request: Request, response: Response, clientData: Object){
    try {
      const {
        nomefinalcli,
        phone,
        email,
        notes,
        orderId
      } = request.body;

      if(nomefinalcli === undefined){
        console.log(clientData);

        const clientsRepository = getRepository(Client);
  
        const existClient = await clientsRepository.findOne({
          where: [
            { nomefinalcli: nomefinalcli }
          ]
        });
  
        if(!existClient && existClient !== ''){
          const data = {
            nomefinalcli,
            phone,
            email,
            notes,
            orderId
          };
  
          const schema = Yup.object().shape({
            nomefinalcli: Yup.string().required(),
            phone: Yup.string().nullable(),
            email: Yup.string().nullable(),
            notes: Yup.string().nullable(),
            orderId: Yup.number().required()
          });
  
          await schema.validate(data, {
            abortEarly: false,
          });
      
          const clientRepository = clientsRepository.create(data);
  
          await clientsRepository.save(clientRepository);
  
            return response.status(201).json(clientRepository);
        }else{
          return response.status(409).json({'Err': 'Cliente já cadastrada.'});
        }

      }else{
        
      }
    }catch(err){
      return response.status(400).json({'Erro': err});
    }
  }
}