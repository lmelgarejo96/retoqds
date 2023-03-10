FROM node:16

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD [ "node", "./build/index.js" ]