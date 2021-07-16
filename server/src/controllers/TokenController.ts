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

    const {
      token,
      createAt,
      updateAt,
    } = request.body;

    const tokensRepository = getRepository(Token);

    const data = {
      token,
      createAt,
      updateAt
    };

    const schema = Yup.object().shape({
        token: Yup.string().required(),
        createAt: Yup.date().default(function (){
          return new Date();
        }),
        updateAt: Yup.date().default(function (){
          return new Date();
        })
      });

    await schema.validate(data, {
        abortEarly: false,
    });

    const tokenRepository = tokensRepository.create(data);

    await tokensRepository.save(tokenRepository);

    return response.status(201).json(tokenRepository);
}
};