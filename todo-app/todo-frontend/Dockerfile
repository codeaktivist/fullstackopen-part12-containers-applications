# comonent tests
FROM node:16 AS test-stage

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN CI=true npm run test

# build stage
FROM node:16

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app .

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

ENV PORT=3001

RUN rm -R /usr/src/app/src/tests

RUN npm ci

CMD [ "npm", "start" ]