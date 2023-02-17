# The Dockerfile for both parts of the application is located at the root of myapp
# This is here just for refernce and NOT uses for the priduction build

FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]