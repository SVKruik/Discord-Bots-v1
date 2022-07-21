FROM node:16.15.1
ENV NODE_ENV=production
WORKDIR /Falco
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "index.js" ]