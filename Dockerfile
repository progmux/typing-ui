FROM node:8.4.0-alpine
EXPOSE 80
WORKDIR /home/node
RUN apk update
RUN apk upgrade
COPY . .
RUN npm install --production > npm-install.log
ENTRYPOINT ["npm", "start"]