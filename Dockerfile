FROM node:16.13.1-alpine3.14

# RUN mkdir -p /app

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", ".env", "./"]

RUN npm install

COPY ./src ./src

CMD npm start