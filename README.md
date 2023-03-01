# Task-Manager-Node
a nodeJS (v18.13.0) application with CRUD API's. The app runs only locally

## Setup

### Requirements
- node (latest version)
- MongoDB Compass

### Local setup

1. Database Connection
- Open MongoDB Compass
- connect to 'mongodb://localhost:27017'

2. Run server
- clone the repo and perform 'npm install'
- run the app using: 'npm start'
- For postman & Integration, API will be available on endpoint http://localhost:5000/api/v1/tasks
- For browser, Frontend app will be accessed on http://localhost:5000

### Endpoints
- endpoints include baseURL + route
- baseURL : http://localhost:5000/api/v1/tasks

### GET - /
 ```
 Response:
 - desc: get all tasks
 - content-type: application/json
- example :
[
    {
      _id: string,
      name: string,
      completed: boolean
    },
    {
      _id: string,
      name: string,
      completed: boolean
    },
]
```

### POST - /
 ```
 Request:
 - desc: create a task
 - content-type: application/json
- example :
body: {
    name: string
}
```

### GET - /:id
 ```
 Request:
 - desc: get task by ID
 - content-type: application/json
 - example :
 {
  task: {
    _id: string,
    name: string,
    completed: boolean
  }
}
```

### PATCH - /:id
 ```
 Request:
 - desc: update a task
 - content-type: application/json
- example :
body: {
    name: string,
    completed: boolean
}
```

### DELETE - /:id
 ```
 Request:
 - desc: delete a task
```
