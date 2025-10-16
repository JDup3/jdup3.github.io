FROM  node:18.20.4-alpine3.20

# Add bash to make package scripts easier to write
RUN apk add bash

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files (after npm install for better caching)
COPY . .

EXPOSE 5173