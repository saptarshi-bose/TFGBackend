# DISCLAIMER

ENV file is not supposed to be pushed in repo. This is done for local environment only!

# To Run the server

Prerequisite: 1. docker-desktop installed on machine

docker-compose up

# API Routes

### Add User

http://localhost:3001/api/user - Post

body: {
"username": "ImSiiva4",
"email": "sap6@gmail.com",
"password": "1234abcd"
}

### login

http://localhost:3001/api/user/login - Post

body: {
"email": "sap6@gmail.com",
"password": "1234abcd"
}

### add game data

http://localhost:3001/api/gamedata/user - post

body: {
"userId": 1,
"latestScore": 100
}

### edit game data

http://localhost:3001/api/gamedata/user/:userId - Patch

body: {
"latestScore": 100
}

### get user game data

http://localhost:3001/api/gamedata/user/:userId - Get

### delete user game data

http://localhost:3001/api/gamedata/user/:userId - Delete
