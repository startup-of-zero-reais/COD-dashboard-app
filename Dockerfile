FROM node:16-alpine3.12

WORKDIR /www/app

COPY . .

RUN yarn

RUN npm rebuild node-sass

CMD [ "yarn", "dev" ]