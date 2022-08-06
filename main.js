// const express = require('express')
import express from "express";
import {nanoid} from 'nanoid';
const app = express()
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'

app.get('/', function (req, res) {
  res.send(`<center><h1 style="font-size:80px;">${nanoid(25)}</h1></center>`)
})

console.log(host);

app.listen(8000,host,function () {
  console.log('app listen on http://localhost:8000')
})