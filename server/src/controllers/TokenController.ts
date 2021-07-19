import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import tokenView from '../view/token_view';
import * as Yup from 'yup';

import Token from "../models/Token";

export default {
  async index(request: Request, response: Response) {
    const tokensRepository = getRepository(Token);

    const tokens = await tokensRepository.find();

    return response.json(tokenView.renderMany(tokens));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const tokensRepository = getRepository(Token);

    const token = await tokensRepository.findOneOrFail(id);

    return response.json(tokenView.render(token));
  },

  async create(request: Request, response: Response) {
    try {
      const {
        token
      } = request.body;
  
      const tokensRepository = getRepository(Token);
  
      const existToken = await tokensRepository.findOne({ 
        where: [
          { token: token }
        ]
      });
  
      console.log(existToken);
  
      if(!existToken && existToken !== ''){
        const data = {
          token,
          createAt: new Date(),
          updateAt: new Date()
        };
    
        const schema = Yup.object().shape({
            token: Yup.string().required(),
            createAt: Yup.date().default(() => new Date()),
            updateAt: Yup.date().default(() => new Date()),
          });
    
        await schema.validate(data, {
            abortEarly: false,
        });
    
        const tokenRepository = tokensRepository.create(data);
    
        await tokensRepository.save(tokenRepository);
    
        return response.status(201).json(tokenRepository);
      }else{
        return response.status(409).json();
      }
    }catch(err){
      return response.status(400).json();
    }
  }
};