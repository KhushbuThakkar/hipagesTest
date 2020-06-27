# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /opt/ui
COPY ui/package*.json ./
RUN npm install -qy
COPY ui/ ./
RUN npm run build


# Setup the server

FROM node:9.4.0-alpine

WORKDIR /opt/
COPY --from=client /opt/ui/build/ ./ui/build/

WORKDIR /opt/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]