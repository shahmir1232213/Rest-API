User Management API
This project is a simple Express.js-based API that allows for basic CRUD (Create, Read, Update, Delete) operations on user data stored in a JSON file (`MOCK_DATA.json`). The API provides endpoints to create, retrieve, update, and delete user records.

Table of Contents
- Installation
- Usage
- API Endpoints

 Installation
1. Install the necessary dependencies:
  npm install
  npm i express
  npm i nodemon
2. Start the server:
     node index.js
     The server will start on `http://localhost:1200`.

Usage
This API uses a simple JSON file (`MOCK_DATA.json`) as the data store. You can interact with the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

API Endpoints
-P OST /api/user/post
  - Description: Adds a new user to the `MOCK_DATA.json` file.
  - Request Body: JSON object containing `id`, `email`, `first_name`, `last_name`, and `gender`.
  - Response: Status 201 with the message "User Created" if successful.

- PATCH /api/user/patch
  - Description: Updates an existing user's information based on their `id`.
  - Request Body: JSON object containing `id`, `email`, `first_name`, `last_name`, and `gender`.
  - Response: Status 201 with the message "User Updated" if successful, or 304 if the update is not performed.

- GET /api/user/get
  - Description: Retrieves a user's information based on their `id`.
  - Request Body:JSON object containing `id`.
  - Response: Status 200 with the user's data if found, or 404 if the user is not found.

- DELETE /api/user/delete**
  - Description: Deletes a user based on their `id`.
  - Request Body: JSON object containing `id`.
  - Response:Status 201 with the message "deleted" if successful.

