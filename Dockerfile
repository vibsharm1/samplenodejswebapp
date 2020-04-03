FROM node:8

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
RUN npm install --production
ADD app.js /usr/src/app/app.js
ADD index.html /usr/src/app/index.html

ENTRYPOINT ["node", "app.js"]