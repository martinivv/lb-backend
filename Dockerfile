FROM node:20.11-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

USER node
CMD ["npx", "ts-node", "./src/server/server.ts"]
