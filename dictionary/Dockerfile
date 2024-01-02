FROM node:18-alpine

WORKDIR /dictionary

COPY .. /dictionary

RUN npm install

CMD npm run dev -- --port 3000 --host 0.0.0.0