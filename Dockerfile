FROM node:16.13.1-alpine3.14

# RUN mkdir -p /app

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", ".env", "./"]

RUN npm install

EXPOSE 3001

COPY ./src ./src

CMD npm start