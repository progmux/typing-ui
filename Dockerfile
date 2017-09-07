FROM node:8.4.0-alpine
RUN apk update
RUN apk upgrade

# Make Docker used existing cached layer unless package.json is changed.
WORKDIR /tmp
ADD package.json /tmp/package.json
RUN npm install
RUN cp -a node_modules /home/node/node_modules

WORKDIR /home/node
ADD . .

EXPOSE 80
ENTRYPOINT ["npm", "start"]