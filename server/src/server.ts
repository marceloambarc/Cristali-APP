import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World!');
});

app.listen(3333,() => {
  console.log('Rodando.')
});