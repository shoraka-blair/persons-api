

# Persons API Readme


## Getting started

```
git clone <some github url>
cd persons-api
npm install
npm start
```

## Endpoints

### GET /persons/:id
returns a JSON object representing a person for a given person id
#### Parameters

id - The primary key of the person to retrieve
#### Example call:
GET /persons/person_james_lois_james@gmail.com
#### Example response:

{
  "_id": "person_james_lois_james@gmail.com",
  "_rev": "2-25f5081732863b5ccbcadef347c58c3f",
  "firstName": "lois",
  "lastName": "james",
  "email": "james@gmail.com",
  "type": "person"
}


### POST /persons/
adds a new  JSON object as a document to a database representing a person for a given person id
#### Parameters

#### Example call:
POST /persons/
include all parameters for the document to be added into the body section of the post
{
  "_id": "person_james_lois_james@gmail.com",
  "_rev": "2-25f5081732863b5ccbcadef347c58c3f",
  "firstName": "lois",
  "lastName": "james",
  "email": "james@gmail.com",
  "type": "person"
}

#### Example response:


{
  "ok": true,
  "id": "person_clark_gary_gclark@gmail.com",
  "rev": "1-ebaf74effbd93c8c2f0f8a33f2df6f3e"
}

{
  "_id": "person_james_lois_james@gmail.com",
  "_rev": "2-25f5081732863b5ccbcadef347c58c3f",
  "firstName": "lois",
  "lastName": "james",
  "email": "james@gmail.com",
  "type": "person"
}


### DELETE /persons/:id
deletes a JSON object representing a person for a given person id
#### Parameters

id - The primary key of the person to retrieve
#### Example call:
DELETE /persons/person_clark_gary_gclark@gmail.com
#### Example response:

{
  "ok": true,
  "id": "person_clark_gary_gclark@gmail.com",
  "rev": "2-499217018393196a488179392cbf906f"
}
