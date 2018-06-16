# We will use the node:alpine image as a base, this will give us the functionality of a server without having to download a huge image
FROM node:alpine
# We then copy everything from our backend into the /db directory inside the container
# Since the docker file is inside the "backend" folder of the app the "." means everything local to the <i>dockerfile</i>
COPY . /db
# Set the pwd of the container to the our backend located now in the /db folder
WORKDIR /db
# Node then needs to execute this command to start our "database"
CMD [ "node", "api.js" ]