FROM node:6.11.0

RUN mkdir -p .
WORKDIR /usr/src/app

COPY package.json .
RUN npm cache clean --force && npm install 
COPY . .
EXPOSE 7214
ENV NODE_ENV beta
CMD [ "npm", "start" ]