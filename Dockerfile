FROM node:alpine

WORKDIR /app

COPY package*.json /app/package.json

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "start"]