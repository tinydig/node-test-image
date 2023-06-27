FROM node:12.18.2-alpine
RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]

