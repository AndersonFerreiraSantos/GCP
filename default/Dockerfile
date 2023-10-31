FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 9090

CMD [ "node", "app.js" ]