FROM node:16.16.0
ENV NODE_ENV=production
WORKDIR /Avocet
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "index.js" ]