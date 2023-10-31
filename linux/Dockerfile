FROM debian:latest

RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /app
COPY package*.json ./
COPY app.js ./
RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]
