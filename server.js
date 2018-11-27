'use strict';

const express = require('express')
const next = require('next')
const config = require("./app/config/env")

global.__SERVER__ = true;

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

//   server.get('/p/:id', (req, res) => {
//     const actualPage = '/post'
//     const queryParams = { title: req.params.id }
//     app.render(req, res, actualPage, queryParams)
//   })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.web.port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.web.port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})