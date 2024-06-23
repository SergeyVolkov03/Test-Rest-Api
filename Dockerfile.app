FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY /src .
COPY prisma ./prisma/
CMD sh -c "npx prisma migrate dev --name init && npm run start"