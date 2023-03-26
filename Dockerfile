FROM node:latest

COPY package*.json ./

RUN npm install && npm run build

COPY . .

CMD [ "node", ".output/server/index.mjs" ]