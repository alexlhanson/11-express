#11: Express and Babel
======

## Configuration 
- 1) clone and/or fork repository
- 2) run `npm install` 
- 3) run node on `index.js`
- 4) create an `.env` for environment variables like PORT

#### Feature Tasks
* implement all code using ES6 Modules (import/export) using Babel
* HTTP server using `express`
* Object constructor that creates a _simple resource_ with at least 3 properties
  * a unique `id` property is included *(node-uuid)*
* JSON parser included with the `body-parser` module as a middleware component to parse the request body on `POST` and `PUT` routes
* uses the npm `debug` module to log the methods in your application
* creates an `npm` script to automate the `debug` process and start the server
* persists API data using the storage module and file system persistence

#### Server Endpoints
* **`/api/vi/resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific resource (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific resource (as JSON)
 * this should return a 204 status code with no content in the body

