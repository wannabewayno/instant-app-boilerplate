FROM node:16.6.0-buster-slim
RUN apt-get update -y
RUN apt-get install -y curl
ENV DOCKER=true
EXPOSE 8080
WORKDIR /var/www/app
COPY package.json .
COPY package-lock.json .
RUN npm install --no-optional --only=prod
COPY . .
# ENTRYPOINT ["./docker-entrypoint.sh"]
CMD [ "node", "src/index.js" ]
