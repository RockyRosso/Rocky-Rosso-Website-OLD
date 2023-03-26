FROM node:latest

WORKDIR /usr/src/app

COPY . ./

RUN npm install && npm run build

CMD [ "node", "run", "start" ]