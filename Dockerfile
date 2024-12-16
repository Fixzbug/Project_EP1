FROM node:18
WORKDIR /usr/src/app/demo
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
