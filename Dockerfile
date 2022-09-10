FROM node:16.17

WORKDIR /app

COPY . /app/

RUN npm install --silent
RUN npm install -D --silent
