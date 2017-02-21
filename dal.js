const PouchDB = require ('pouchdb-http')
const {map, omit, compose} = require('ramda')

const db = new PouchDB('http://localhost:5984/test')


//create and end export a function that retrieves a person form your couch Database

function getPerson(id, cb) {
  db.get(id, function (err, doc) {
    if (err) return cb(err)
    cb(null, doc)
  })



}

// getPerson("person_garver_lois_garber@gmail.com", function (err, doc) {
//   if (err) console.log ("error", err)
//   console.log (doc)
// })



const dal = {
  getPerson: getPerson
}

module.exports = dal
