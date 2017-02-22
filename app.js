const express = require('express')
const dal = require('./dal.js')
const app = express ()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')

app.use(bodyParser.json())

app.post('/persons', function (req, res, next) {
  dal.addPersonNoId(req.body, function (err, docs) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(201).send(docs)
  })
})
//next lets you pass execution down to the next middleware handler... if err, goes to error handler that always goes at the end...after all routes (other app.use)

app.get ('/persons', function (req, res, next) {
  dal.getAllPersons(function (err, docs) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(201).send(docs)
  })
})


app.get ('/persons/:id', function (req, res, next) {
  dal.getPerson(req.params.id, function (err, docs) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(docs)
  })
})

app.delete ('/persons/:id', function (req, res, next) {
  dal.deletePerson(req.params.id, function (err, docs) {
    if(err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(docs)
  })
})

app.put ('/persons/:id', function (req, res, next) {
  dal.updatePerson(req.body, function (err, docs) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.status(200).send(docs)
  })
})



app.use(function (err, req, res, next) {
  console.log (req.method, "", req.path, "err:", err)
  res.status(err.status || 500)
  res.send(err)
})




app.listen(port, function() {
  console.log('Example app listening:', port)
})
