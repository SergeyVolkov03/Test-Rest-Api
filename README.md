# Todo Rest Api

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://www.docker.com/get-started).

## Cloning the repository

```
https://github.com/SergeyVolkov03/Test-Rest-Api.git
```

## Installing dependencies

```
npm install
```

## Create .env file (based on .env.example): ./.env


## Running the application and the database

```
docker compose up
```

By default, the application will run on port 8000

## Description Todo Rest Api

### Registration

```
POST /auth/register
request.body: {
    "email": string,
    "password": string
}

response: {
    "accessToken": "your AccessToken"
}
```

### Login

```
POST /auth/login
request.body: {
    "email": string,
    "password": string
}

response: {
    "accessToken": "your AccessToken"
}
```

### Create Todo

```
POST /tasks/
headers.authorisation: Bearer your accessToken
request.body: {
    "title": string,
    "description": string,
    "status": boolean (default false, isOptional)
}

response: {
    "id": number,
    "title": string,
    "description": string,
    "status": boolean,
    "created_at": timestamp,
    "updated_at": timestamp,
    "user_id": number
}

```

### Get All Todos

```
Get /tasks/
headers.authorisation: Bearer your accessToken

response: [{
    "id": number,
    "title": string,
    "description": string,
    "status": boolean,
    "created_at": timestamp,
    "updated_at": timestamp,
    "user_id": number
},]

```

### Get Todo by Id

```
Get /tasks/:id
headers.authorisation: Bearer your accessToken

response: {
    "id": number,
    "title": string,
    "description": string,
    "status": boolean,
    "created_at": timestamp,
    "updated_at": timestamp,
    "user_id": number
}

```

### Update Todo by Id

```
Put /tasks/:id
headers.authorisation: Bearer your accessToken
request.body: {
    "email": string(isOptional),
    "password": string(isOptional),
    "status": boolean(isOptional)
}

response: {
    "id": number,
    "title": string,
    "description": string,
    "status": boolean,
    "created_at": timestamp,
    "updated_at": timestamp,
    "user_id": number
}

```

### Delete Todo by Id

```
Delete /tasks/:id
headers.authorisation: Bearer your accessToken

response: {
    "id": number,
    "title": string,
    "description": string,
    "status": boolean,
    "created_at": timestamp,
    "updated_at": timestamp,
    "user_id": number
}

```