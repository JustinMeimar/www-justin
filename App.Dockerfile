FROM node:20

RUN apt-get install -y llc

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5724

# CMD ["npm", "run", "dev", "--host", "0.0.0.0"]