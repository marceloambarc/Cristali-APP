import { createConnection } from "typeorm";

createConnection().then(res => {
  console.log('Conexão com o banco de dados.');
}).catch(err => {
  console.log(err)});