FROM node:20.11-alpine AS builder

WORKDIR /node/app

COPY package*.json ./
RUN npm ci

COPY . .

USER node
CMD []

# ============================================ PROD ============================================ #

# {...}