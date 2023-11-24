# DISCLAIMER

ENV file is not supposed to be pushed in repo. This is done for local environment only!

# To Run the server

Prerequisite: 1. docker-desktop installed on machine

Commands:

cd /TFGBackend


npm i


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

returns {token: JWT_TOKEN_WITH_USER_DATA_AS_PAYLOAD}

### add game data

http://localhost:3001/api/gamedata/user - post

add token in request header authorization - "BEARER {{TOKEN_RECEIVED_AFTER_USER_LOGIN}}"

body: {
"userId": 1,
"latestScore": 100
}

### edit game data

http://localhost:3001/api/gamedata/user/:userId - Patch


add token in request header authorization - "BEARER {{TOKEN_RECEIVED_AFTER_USER_LOGIN}}"


body: {
"latestScore": 100
}


### get user game data

http://localhost:3001/api/gamedata/user/:userId - Get


add token in request header authorization - "BEARER {{TOKEN_RECEIVED_AFTER_USER_LOGIN}}"



### delete user game data

http://localhost:3001/api/gamedata/user/:userId - Delete


add token in request header authorization - "BEARER {{TOKEN_RECEIVED_AFTER_USER_LOGIN}}"



