FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

ENV PORT=3001

RUN npm install

CMD [ "npm", "start" ]
