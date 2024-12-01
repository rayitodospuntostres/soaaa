FROM node:22.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

 
EXPOSE 4200

CMD ["npm", "start"]