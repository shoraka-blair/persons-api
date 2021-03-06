const PouchDB = require ('pouchdb-http')
const {map, omit, compose,prop} = require('ramda')

const db = new PouchDB('http://localhost:5984/test')


//create and end export a function that retrieves a person form your couch Database


function getAllPersons (limit, cb) {
  db.allDocs({
        include_docs: true,
        start_key: "person_",
        end_key: "person_\uffff",
        limit: limit
    }, function (err, docs) {
      if (err) return cb(err)
      cb(null, map(x=> x.doc, docs.rows))
    })
}

function getAllAddresses (limit, cb) {
  db.allDocs({
    include_docs: true,
    start_key: "address_",
    end_key: "address_\uffff",
    limit: limit
  }, function (err, docs) {
    if (err) return cb(err)
    cb(null, map(x=> x.doc, docs.rows))
  })
}




function getPerson(id, cb) {
  db.get(id, function (err, doc) {
    if (err) return cb(err)
    cb(null, doc)
  })
}

function getAddress (id, cb) {
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


function addPersonNoId (doc, cb) {
  checkRequiredInputs(doc)? db.put(preppedNewPerson(doc), function (err, addedPerson) {
      if (err) return cb(err)
      cb (null, addedPerson)
    }): cb ({
        error: "bad_request",
        reason: "bad_request",
        name: "bad_request",
        status: "400",
        message: "need all three"
      })
    }

function preppedNewPerson(doc) {
  doc._id = "person_" + doc.firstName.toLowerCase()+"_" + doc.lastName.toLowerCase()+"_"+ doc.email.toLowerCase(),
  doc.type = "person"
  return doc
}

function checkRequiredInputs (doc) {
  return prop('firstName', doc)&& prop('lastName', doc) && prop('email', doc)

}

function addAddress (doc, cb) {
  checkRequiredAddressInputs(doc)?
  db.put(preppedNewAddress(doc), function (err, doc) {
    if (err) return cb(err)
    cb (null, doc)
  }): cb({
      error: "bad_request",
      reason: "bad_request",
      name: "bad_request",
      status: "400",
      message: "need to provide person_id, address_type, street, city, state, and zip"
    })

}

function preppedNewAddress (doc) {
  doc._id="address_"+doc.person_id+"_"+doc.street,
  doc.type="address"
return doc}

function checkRequiredAddressInputs (doc) {
  return prop('person_id', doc) && prop('address_type', doc) && prop('street', doc) && prop('city', doc) && prop('state', doc) && prop('zip', doc)
}



// ({"_id": "person_james_amy_james@gmail.com",
//   "_rev": "2-767f0cc459a72750f15cf9101cb2024d",
//   "firstName": "Lucy",
//   "lastName": "James",
//   "email": "james@gmail.com",
//   "type": "person"}, function (err, doc) {
//     if (err) return console.log (err)
//     return console.log(doc)
//   })




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
  addAddress: addAddress,
  getAddress: getAddress,
  getAllAddresses: getAllAddresses,
  getAllPersons: getAllPersons,
  addPersonNoId: addPersonNoId,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
  addPerson: addPerson,
  getPerson: getPerson
}

module.exports = dal
