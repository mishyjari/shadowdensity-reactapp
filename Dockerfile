FROM node:lts

WORKDIR /src

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@latest -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]