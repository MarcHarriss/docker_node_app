FROM node:alpine

COPY . /db

WORKDIR /db

CMD [ "node", "api.js" ]

# Start node container
# docker run -tp 4200:8000 --name node node_db:0.0.1