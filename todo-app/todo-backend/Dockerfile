FROM node:16 AS todo-backend-container

WORKDIR /usr/src/app/

ENV NODE_ENV production

COPY --chown=node:node . .

RUN npm ci --only=production

USER node

CMD npm start