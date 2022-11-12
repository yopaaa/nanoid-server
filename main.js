import express from "express";
import {nanoid} from 'nanoid';
import dotenv from 'dotenv'; dotenv.config();

const app = express()
const host = process.env.HOST
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send(`<center><h1 style="font-size:80px;">${nanoid(25)}</h1></center>`)
})

app.listen(port,host,function () {
  console.log(`app listen on http://${host}:${port}`)
})