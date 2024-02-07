FROM node:20.11-alpine

WORKDIR /node/app

COPY package*.json ./
RUN npm ci

COPY . .

USER node
CMD []

# ============================================ PROD ============================================ #

# {...}