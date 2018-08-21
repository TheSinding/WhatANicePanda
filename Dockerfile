FROM node:alpine
ENV WAN_API_URL='http://api.whatanicepanda.com'
WORKDIR /usr/src/wanp
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --global serve
RUN npm install
COPY . .
EXPOSE 5000
CMD ["serve", "./dist/spa-mat"]