
# Blog API

A blog backend service with CRUD endpoints and database integration that runs locally on a Docker container.
It can authenticate users and manage their blog posts on a database.

<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Virkkunen/blog-api" /> <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/Virkkunen/blog-api" />

## Features

- GET, POST, PUT and DELETE endpoints
- Database integration
- MSC architecture
- Unit tests


## Run Locally

Clone the project

```bash
  git clone https://github.com/Virkkunen/blog-api.git
```

Go to the project directory

```bash
  cd blog-api
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  docker-compose up -d
```

Migrate and seed the database

```bash
  npm run prestart
  npm run seed
```

Access the server terminal

```bash
  docker exec -it blogs_api bash
```

Start the service inside the container terminal

```bash
  npm run dev
```

The service is now running on `localhost:3001`

## API Reference

### Login
Endpoint will return a token used to login. User needs to add this token as an ```Authentication``` header on future requisitions.

```http
  POST /login
```
Requisition body:
```js
{ 
  "email": ${userEmail},
  "password": ${userPassword},
 }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Login email |
| `userPassword`      | `string` | **Required**. Login password |



### User

#### Create new user

```http
  POST /user
```

Requisition body:
```js
{ 
  "displayName": ${userName},
  "email": ${userEmail},
  "password": ${userPassword},
  "image": ${userImage}
 }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userName`      | `string` | **Required**. User display name |
| `userEmail`      | `string` | **Required**. Email used for login |
| `userPassword`      | `string` | **Required**. Password used for login |
| `userImage`      | `string` | Profile picture URL |

#### List all users
⚠️ **User needs to be logged in**

```http
  GET /user
```

#### List user by ID
⚠️ **User needs to be logged in**

```http
  GET /user/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. User ID |

#### Delete user
⚠️ **User needs to be logged in**

```http
  DELETE /user/me
```

### Categories

#### Create new category
⚠️ **User needs to be logged in**

```http
  POST /categories
```

Requisition body:
```js
{ "name": ${catName} }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `catName`      | `string` | **Required**. Category name |

#### List all categories
⚠️ **User needs to be logged in**

```http
  GET /categories
```

### Post

#### Create new post
⚠️ **User needs to be logged in**

```http
  POST /post
```

Requisition body:
```js
{ 
  "title": ${postTitle}, 
  "content": ${postContent}, 
  "categoryIds": ${catIds}
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postTitle`      | `string` | **Required**. Post title |
| `postContent`      | `string` | **Required**. Post content |
| `catIds`      | `number array` | **Required**. IDs of the categories post belongs to, eg.: [1, 2] |

#### List all posts by the user
⚠️ **User needs to be logged in**

```http
  GET /post
```
#### Get a user's post by ID
⚠️ **User needs to be logged in**

```http
  GET /post/${postId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`      | `number` | **Required**. ID of the post |


#### Update a post
⚠️ **User needs to be logged in**

```http
  PUT /post/${postId}
```

Requisition body:
```js
{ 
  "title": ${postTitle}, 
  "content": ${postContent}
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`      | `number` | **Required**. ID of the post |
| `postTitle`      | `string` | **Required**. Post title |
| `postContent`      | `string` | **Required**. Post content |

#### Delete a post
⚠️ **User needs to be logged in**

```http
  DELETE /post/${postId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`      | `number` | **Required**. ID of the post |

#### Search for a post
⚠️ **User needs to be logged in**

Will return all posts with title and/or content matching the query

```http
  GET /post/search?q=${query}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. Search query |

---
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@Virkkunen](https://www.github.com/Virkkunen)


## Tech Stack

Node.js, Express.js, MySQL, Sequelize, JWT, Docker, REST API, CRUD, MSC, Jest

