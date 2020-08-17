FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --only=prod

COPY . .

CMD ["npm", "start"]