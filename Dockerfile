FROM node:alpine

WORKDIR /app

COPY package*.json /app/package.json

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start"]