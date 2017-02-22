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

function addPerson(doc, cb) {
  db.put(doc, function (err, addedPerson) {
    if (err) return cb(err)
      cb (null, addedPerson)

  })
}

function updatePerson(doc, cb) {
  db.put(doc, function (err, updatedPerson) {
    if (err) return cb(err)
    cb (null, updatedPerson)
  })
}





function deletePerson(id, cb) {
  db.get (id, function (err, doc) {
    if (err) return cb(err)

    db.remove(doc, function (err, deletedPerson) {
      if (err) return cb(err)
      cb(null, deletedPerson)
    })
  })
  }




// addPerson({"_id": "person_james_amy_james@gmail.com",
//   "_rev": "2-767f0cc459a72750f15cf9101cb2024d",
//   "firstName": "Lucy",
//   "lastName": "James",
//   "email": "james@gmail.com",
//   "type": "person"}, function (err, doc) {
//     if (err) return console.log (err)
//     return console.log(doc)
//   })



// getPerson("person_garver_lois_garber@gmail.com", function (err, doc) {
//   if (err) console.log ("error", err)
//   console.log (doc)
// })

// deletePerson("person_germain_mark_germain@gmail.com", function (err, doc) {
//   if (err) console.log ("error", err)
//   console.log (doc)
// })



const dal = {
  updatePerson: updatePerson,
  deletePerson: deletePerson,
  addPerson: addPerson,
  getPerson: getPerson
}

module.exports = dal
