FROM node:12

WORKDIR /opt/ct
CMD yarn start

COPY ./package.json ./yarn.lock ./
RUN yarn install --pure-lockfile

COPY . .

EXPOSE 8080