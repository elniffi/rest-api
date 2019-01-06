# rest-api

An api to manage authentication, users, games etc

## How to run

* Make sure to have Node.js installed, version 11.6.0+
* Download the respository
* Navigate to the root of the repository in a terminal of your choice
* Run ``npm install`` from the root of the project
* And then finally to start the api run ``npm start`` from the root of the project
* That's it, it should now be listening to the port specified in ``config.json``

## Defined endpoints

### /users

#### POST

Authentictaion: none

Payload should be the json string that contains the required data to create a new user.

Returns nothing.

#### DELETE

Authentictaion: required

No payload.

Returns nothing.

### /users/:id

#### GET

Authentictaion: required

No payload.

Returns the information about the user.

#### UPDATE

Authentictaion: required

Payload should be a json string that contains the properties of the user that should be updated.

Returns nothing.

### /authentication

#### GET

Authentictaion: required

No payload.

Returns a json string that contains information about who the user is if it is valid.

#### DELETE

Authentictaion: required

No payload.

Returns nothing.

### /login

#### POST

Authentictaion: no, duuuh :) 

Payload should be a json string that contains the users email and password

Returns a JWT for that user in a json string that is valid for 24 hours

**NOTE: ``Authentictaion: required`` means that you need to send a valid JWT for the user in a header called ``x-user-authentication``**