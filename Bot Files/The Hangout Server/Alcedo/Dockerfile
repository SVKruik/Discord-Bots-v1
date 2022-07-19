 FROM node:12-alpine
 WORKDIR /alcedo
 COPY package.json yarn.lock ./
 RUN yarn install --production
 COPY . .
 CMD ["node", "index.js"]