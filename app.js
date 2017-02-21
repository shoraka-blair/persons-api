const express = require('express')
const dal = require('./dal.js')
const app = express ()


app.get ('/persons/:id', function (req, res) {
  dal.getPerson(req.params.id, function (err, docs) {
    if (err) return res.send(err)
    res.send(docs)
  })
})

app.listen(8080, function() {
  console.log('Example app listening on port 8080')
})
