FROM node:8.4.0-alpine
WORKDIR /home/node
RUN apk update
RUN apk upgrade

ADD . .
RUN npm install --production > npm-install.log

EXPOSE 80
ENTRYPOINT ["npm", "start"]