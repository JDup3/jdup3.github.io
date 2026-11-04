# Development image for the Makefile targets. Keep the Node version in sync
# with .nvmrc (24).
FROM node:24.21.0-alpine3.24

# Add bash to make package scripts easier to write
RUN apk add --no-cache bash

# make the 'app' folder the current working directory, owned by the
# unprivileged 'node' user that ships with the image
WORKDIR /app
RUN chown node:node /app
USER node

# Install exactly what package-lock.json pins. Copying the manifest and the
# lockfile first keeps this layer cached until dependencies change.
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project (.dockerignore keeps node_modules, .git and
# build output out of the build context)
COPY --chown=node:node . .

EXPOSE 5173
