import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import { salt } from '../../credentials';
import { JWTSecret } from '../../credentials';

import Acesso from "../models/Acesso";
import acessoView from '../view/acesso_view';

export default {
  async index(request: Request, response: Response) {
    const acessosRepository = getRepository(Acesso);

    const acessos = await acessosRepository.find();

    return response.json(acessoView.renderMany(acessos));
  },

  async login(request: Request, response: Response){
    const { cgce, senha } = request.body;

    const acessosRepository = getRepository(Acesso);

    const acesso = await acessosRepository.findOne({"cgce": cgce});

    if(acesso === undefined){
      return response.status(403).send({"erro": "Usuário não cadastrado"});
    }else{
      const isPasswordRight = await bcrypt.compare(senha, acesso.senha);

      if(!isPasswordRight){
        return response.status(401).json({"Erro": "Senha Incorreta"});
      }else{
        jwt.sign({cgce, id: acesso.id, ativo: acesso.ativo, nomeclie: acesso.nomecli}, JWTSecret, { expiresIn: '1h' }, (err, token) => {
          if(err){
            return response.status(403).json({ "Ops!": "A sua sessão Terminou, Faça o Login Novamente." });
          }else{
            return response.status(200).json({ "token": token, "user": acessoView.render(acesso) });
          }
        })
        //return response.status(200).json(acessoView.render(acesso));
      }
    }
  },

  async edit(request: Request, response: Response) {
    try {
      const { cgce } = request.params;

      const acessosRepository = getRepository(Acesso);

      const existAcesso = await acessosRepository.findOne({
        where: [
          { cgce: cgce }
        ]
      });

      console.log(existAcesso);

      if(existAcesso != undefined){
        const { 
          senha,
          ativo,
          ccli,
          nomecli,
          cgce
        } = request.body;

        const saltEncriypted = await bcrypt.genSalt(salt);
        const hash = await bcrypt.hash(senha, saltEncriypted);

        const data = {
          senha: hash,
          ativo,
          ccli,
          nomecli,
          cgce
        };

        const schema = Yup.object().shape({
          senha: Yup.string().required(),
          ativo: Yup.number().required(),
          ccli: Yup.string().required(),
          nomecli: Yup.string().required(),
          cgce: Yup.string().required()
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const acessoRepository = await acessosRepository.update(existAcesso.id, data);

        console.log(senha, ativo, ccli, nomecli, cgce);

        return response.status(200).json(acessoRepository);

      }else{
        return response.status(404).json({ 'Erro': 'Usuário não encontrado' });
      }
    }catch(err) {
      return response.status(400).json({ err });
    }
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

      if(existAcesso === undefined){
        const saltEncriypted = await bcrypt.genSalt(salt);
        const hash = await bcrypt.hash(senha, saltEncriypted);

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