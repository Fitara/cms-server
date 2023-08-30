## Endpoints

List of Available Endpoints:

- `POST /register`
- `POST /pub/register`
- `POST /login`
- `POST /pub/login`
- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `GET /pub/posts/:postId`
- `PUT /posts/:id`
- `PATCH /posts/:id`
- `GET /pub/favorites`
- `POST /pub/favorites/:postId`
- `GET /categories`
- `POST /categories`
- `GET /categories/:id`
- `POST /histories`
- `GET /categories`
- `DELETE /posts/:id`
- `DELETE /categories/:id`
- `DELETE /categories/:id`

### POST /register

#### Description

- Create a new user data

#### Request

- Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

#### Response

_201 - Created_

```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```

_400 - Bad Request_

```json
{
    "message": "Email is required"
},
    OR
{
    "message": "Invalid email format"
},
    OR
{
    "message": "Email must be unique"
},
    OR
{
    "message": "Password is required"
},
    OR
{
    "message": "Minimum password is 5 character"
}
```

### POST /pub/register

#### Description

- Create a new user data for customer

#### Request

- Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

#### Response

_201 - Created_

```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```

_400 - Bad Request_

```json
{
    "message": "Email is required"
},
    OR
{
    "message": "Invalid email format"
},
    OR
{
    "message": "Email must be unique"
},
    OR
{
    "message": "Password is required"
},
    OR
{
    "message": "Minimum password is 5 character"
}
```

### POST /login

#### Description

- Get access token for access features

#### Request

- Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Response

_200 - OK_

```json
{
  "access_token": "string",
  "id": "integer",
  "role": "string"
}
```

_400 - Bad Request_

```json
{
    "message": "Email is required"
},
    OR
{
    "message": "Password is required"
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid email or password"
},
    OR
{
    "message": "Invalid token"
}
```

### POST /pub/login

#### Description

- Get access token for access features for customer

#### Request

- Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Response

_200 - OK_

```json
{
  "access_token": "string",
  "id": "integer",
  "role": "string"
}
```

_400 - Bad Request_

```json
{
    "message": "Email is required"
},
    OR
{
    "message": "Password is required"
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid email or password"
},
    OR
{
    "message": "Invalid token"
}
```

### POST /posts

#### Description

- Create a new post data

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

- Body

```json
{
  "title": "string",
  "content": "string",
  "imgUrl": "string",
  "categoryId": "integer",
  "authorId": "integer"
}
```

#### Response

_201 - Created_

- Body

```json
{
    "message": `${post.title} succesfully created`,
}
```

_400 - Bad Request_

- Body

```json
{
  "message": "string"
}
```

### GET /posts

#### Description

- Get all the post data

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
[
    {
        "id": 1,
        "title": "Dasar Anak Jajan!",
        "content": "Dari namanya, kamu pasti sudah tahu...",
        "imgUrl": "https://www.pngfind.com/pngs/m/679-6799331_healthy-food-clipart-free-vector-art-stock-graphics.png",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2023-03-13T08:33:26.471Z",
        "updatedAt": "2023-03-13T08:33:26.471Z",
        "User": {
            "id": 1,
            "username": "admin",
            "email": "admin@mail.com",
            "role": "Admin",
            "phoneNumber": "12345777",
            "address": "Pondok Labu",
            "createdAt": "2023-03-13T08:33:26.263Z",
            "updatedAt": "2023-03-13T08:33:26.263Z"
        }
    },
    ...
]
```

### GET /pub/posts

#### Description

- Get all the post data for customer

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
[
    {
        "id": 1,
        "title": "Dasar Anak Jajan!",
        "content": "Dari namanya, kamu pasti sudah tahu...",
        "imgUrl": "https://www.pngfind.com/pngs/m/679-6799331_healthy-food-clipart-free-vector-art-stock-graphics.png",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2023-03-13T08:33:26.471Z",
        "updatedAt": "2023-03-13T08:33:26.471Z",
        "User": {
            "id": 1,
            "username": "admin",
            "email": "admin@mail.com",
            "role": "Admin",
            "phoneNumber": "12345777",
            "address": "Pondok Labu",
            "createdAt": "2023-03-13T08:33:26.263Z",
            "updatedAt": "2023-03-13T08:33:26.263Z"
        }
    },
    ...
]
```

### GET /posts/:id

#### Description

- Get the post data by id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

  ```json
  {
    "id": 1,
    "title": "Dasar Anak Jajan!",
    "content": "Dari namanya, kamu pasti sudah tahu...",
    "imgUrl": "https://www.pngfind.com/pngs/m/679-6799331_healthy-food-clipart-free-vector-art-stock-graphics.png",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-03-13T08:33:26.471Z",
    "updatedAt": "2023-03-13T08:33:26.471Z"
  }
  ```

### GET /pub/posts/:postId

#### Description

- Get the post data by id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
  "id": 1,
  "title": "Dasar Anak Jajan!",
  "content": "Dari namanya, kamu pasti sudah tahu...",
  "imgUrl": "https://www.pngfind.com/pngs/m/679-6799331_healthy-food-clipart-free-vector-art-stock-graphics.png",
  "categoryId": 1,
  "authorId": 1,
  "createdAt": "2023-03-13T08:33:26.471Z",
  "updatedAt": "2023-03-13T08:33:26.471Z"
}
```

### PUT /posts/:id

#### Description

- Update the post data by id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "message": `${post.title} succesfully updated`;
}
```

### PATCH /posts/:id

#### Description

- Update status from post data by id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "message": "Status succesfull updated";
}
```

### GET /favorites

#### Description

- Get all the favorites post data for customer

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
[
    {
        "id": 1,
        "title": "Dasar Anak Jajan!",
        "content": "Dari namanya, kamu pasti sudah tahu...",
        "imgUrl": "https://www.pngfind.com/pngs/m/679-6799331_healthy-food-clipart-free-vector-art-stock-graphics.png",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2023-03-13T08:33:26.471Z",
        "updatedAt": "2023-03-13T08:33:26.471Z",
        "User": {
            "id": 1,
            "username": "admin",
            "email": "admin@mail.com",
            "role": "Admin",
            "phoneNumber": "12345777",
            "address": "Pondok Labu",
            "createdAt": "2023-03-13T08:33:26.263Z",
            "updatedAt": "2023-03-13T08:33:26.263Z"
        }
    },
    ...
]
```

### POST /favorites/:postId

#### Description

- Create the favorite post data with params postId

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "message": "Succesfully added to favorite";
}
```

### GET /categories

#### Description

- Get all the categories data

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "id": 1,
    "name": "Food",
    "createdAt": "2023-03-13T08:33:26.436Z",
    "updatedAt": "2023-03-13T08:33:26.436Z"
},
...
```

### POST /categories

#### Description

- Create a new category data

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

- Body

```json
{
  "name": "string"
}
```

#### Response

_201 - Created_

- Body

```json
{
    "message": `${category.name} succesfully created`,
}
```

_400 - Bad Request_

- Body

```json
{
  "message": "string"
}
```

### GET /categories/:id

#### Description

- Get the category data by id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
  "id": 1,
  "name": "Food",
  "createdAt": "2023-03-25T17:55:13.860Z",
  "updatedAt": "2023-03-25T18:39:16.015Z"
}
```

### POST /histories

#### Description

- Create a new history data inside post actions

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

- Body

```json
{
  "title": "string",
  "description": "string",
  "updatedBy": "string"
}
```

Note: key "description" will be create differently depend on method actions (POST, PUT, PATCH, DELETE).

### GET /histories

#### Description

- Get all the history data

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
[
    {
      "id": 1,
      "title": "Food",
      "description": "Food with id 1 updated",
      "updatedBy": "admin@mail.com",
      "createdAt": "2023-03-26T10:31:43.922Z",
      "updatedAt": "2023-03-26T10:31:43.922Z"
    },
    ...
]
```

### DELETE /posts/:id

#### Description

- Remove a post data based on given id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "message": `${post.title} succesfully deleted`
}
```

_404 - Not Found_

- Body

```json
{
  "message": "Post not found"
}
```

### DELETE /categories/:id

#### Description

- Remove a category data based on given id

#### Request

- Headers

```json
{
  "access_token": "string"
}
```

#### Response

_200 - OK_

- Body

```json
{
    "message": `${category.name} succesfully deleted`
}
```

_404 - Not Found_

- Body

```json
{
  "message": "Category not found"
}
```

### Global Error

#### Response

_500 - Internal Server Error_

- Body

```json
{
  "message": "Internal server error"
}
```
