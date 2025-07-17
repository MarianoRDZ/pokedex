# Stage 1: Build (para producción)
FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .env .env
COPY . .

RUN npm run build

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
