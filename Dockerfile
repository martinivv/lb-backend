FROM node:20.11-alpine AS base

WORKDIR /node/app

COPY package*.json ./
RUN npm ci

COPY . .

USER node
CMD ["npm", "run", "dev"]

# ======================================== PROD ======================================== #

# {...}