

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
```
{
  "_id": "person_james_lois_james@gmail.com",
  "_rev": "2-25f5081732863b5ccbcadef347c58c3f",
  "firstName": "lois",
  "lastName": "james",
  "email": "james@gmail.com",
  "type": "person"
}
```

### POST /persons/
adds a new  JSON object as a document to a database representing a person for a given person id
#### Parameters
must include:
firstName
lastName
email

#### Example call:
POST /persons/
include all parameters for the document to be added into the body section of the post
```
{
  "firstName": "lois",
  "lastName": "james",
  "email": "james@gmail.com"
}
```
#### Example response:

```
{
  "ok": true,
  "id": "person_clark_gary_gclark@gmail.com",
  "rev": "1-ebaf74effbd93c8c2f0f8a33f2df6f3e"
}
```

### DELETE /persons/:id
deletes a JSON object representing a person for a given person id
#### Parameters

id - The primary key of the person to retrieve
#### Example call:
DELETE /persons/person_clark_gary_gclark@gmail.com
#### Example response:
```
{
  "ok": true,
  "id": "person_clark_gary_gclark@gmail.com",
  "rev": "2-499217018393196a488179392cbf906f"
}
```
### GET /persons  gets all persons from database and can return a set amount of documents using 'limit'
returns a batch of JSON objects representing persons with a limited number of responses
#### Parameters
can include a limit
#### Example call(s):
GET /persons
GET /persons?limit=10
#### Example response:
```
10 person documents from db


```
### GET /addresses gets all addresses from database and can return a set amount of documents using 'limit'
returns a batch of JSON objects representing addresses with a limited number of responses
#### Parameters
can include a limit
#### Example call(s):
GET /addresses
GET /addresses?limit=10
#### Example response:
```
10 address documents from db


```

### GET /addresses/:id
returns a JSON object representing an address for a given address id
#### Parameters

id - The primary key of the address to retrieve
#### Example call:
GET /addresses/address_jones_amy_jones@gmail.com_1824_canyon oaks
#### Example response:
```
{
  "_id": "address_jones_amy_jones@gmail.com_1824_canyon oaks",
"_rev": "3-12bb932e6911c3723fd548496906cf9c",
"person_id": "person_jones_amy_jones@gmail.com",
"type": "address",
"address_type": "vacation",
"street": "1824 canyon oaks",
"city": "Mount Pleasant",
"state": "South Carolina",
"zip": 29464
}
```
### POST /addresses/
adds a new  JSON object as a document to a database representing an address for a given person id
#### Parameters
the request body must contain:
person_id
address type
street
city
state
zip

#### Example call:
POST /addresses/
include all parameters for the document to be added into the body section of the post
```
{
  "person_id": "person_jones_amy_jones@gmail.com",
  "address_type": "vacation",
  "street": "1824 canyon oaks",
  "city": "Mount Pleasant",
  "state": "South Carolina",
  "zip": 29464
  }

```
#### Example response:

```
{
  "ok": true,
  "id": "address_person_Markson_joe_jhillandale@gmail.com_1875 canyon oaks",
  "rev": "1-4a8e52345132ecdf073a7cf6f203fe84"
}
```
