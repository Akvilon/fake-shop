FROM node

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install -g ts-node

COPY . .

EXPOSE 8080

CMD ["ts-node-esm", "src/index.ts"]