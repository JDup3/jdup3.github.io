FROM  node:18.20.4-alpine3.20

# Add bash to make package scripts easier to write
RUN apk add bash

# make the 'app' folder the current working directory
WORKDIR /app

# copy 'package.json' (if available)
COPY package.json ./

# install project dependencies
RUN npm install

# explicityly copy project files (after npm install for better caching)
COPY tailwind.config.cjs ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY postcss.config.cjs ./
COPY .eslintrc.cjs ./
COPY .prettierrc ./
COPY src ./src
COPY public ./public

EXPOSE 5173