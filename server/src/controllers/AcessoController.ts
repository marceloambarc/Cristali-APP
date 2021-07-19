import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import acessoView from '../view/acesso_view';
import * as Yup from 'yup';

import { salt } from '../../credentials';

import Acesso from "../models/Acesso";
import acesso_view from '../view/acesso_view';

export default {
  async index(request: Request, response: Response) {
    const acessosRepository = getRepository(Acesso);

    const acessos = await acessosRepository.find();

    return response.json(acesso_view.renderMany(acessos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const acessosRepository = getRepository(Acesso);

    const acesso = await acessosRepository.findOneOrFail(id);

    return response.json(acessoView.render(acesso));
  },

  async create(request: Request, response: Response) {
    try {
      const {
        senha,
        ccli,
        nomecli,
        cgce
      } = request.body;

      const acessosRepository = getRepository(Acesso);

      const existAcesso = await acessosRepository.findOne({
        where: [
          { cgce: cgce }
        ]
      });

      console.log(existAcesso);

      if(existAcesso === undefined){
        const saltEncriypted = await bcrypt.genSalt(salt);
        const hash = await bcrypt.hash(senha, saltEncriypted);

        console.log('awui1');

        const data = {
          ativo: 0,
          senha: hash,
          ccli,
          nomecli,
          cgce
        };

        const schema = Yup.object().shape({
          ativo: Yup.number().required(),
          senha: Yup.string().required(),
          ccli: Yup.string().required(),
          nomecli: Yup.string().required(),
          cgce: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const acessoRepository = acessosRepository.create(data);

        await acessosRepository.save(acessoRepository);

        return response.status(201).json(acessoRepository);
      }else{
        return response.status(409).json();
      }
    }catch(err){
      return response.status(400).json({ err });
    }
  }
};