FROM node:16 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm run test

# build stage
FROM node:16 AS build-stage

WORKDIR /usr/src/app

ENV NODE_ENV production

# required here, passing via compose will not make it to the second stage
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/

COPY --from=test-stage /usr/src/app .

RUN npm ci --only=production

RUN npm run build

# Production stage
FROM node:16

WORKDIR /usr/src/app

COPY --from=build-stage --chown=node:node /usr/src/app/build /usr/src/app/build

RUN npm install -g serve

USER node

CMD ["serve", "build"]
