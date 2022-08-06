// const express = require('express')
import express from "express";
import {nanoid} from 'nanoid';
const app = express()

app.get('/', function (req, res) {
  res.send(`<center><h1 style="font-size:80px;">${nanoid(25)}</h1></center>`)
})

app.listen(8000, function () {
  console.log('app listen on http://localhost:8000')
})