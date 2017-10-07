FROM node:6.11.0

RUN mkdir -p .
WORKDIR /usr/src/app

COPY package.json .
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 7214
ENV NODE_ENV beta
CMD [ "npm", "start" ]