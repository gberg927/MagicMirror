FROM node:13

EXPOSE 7777

WORKDIR /app

COPY package.json /app
RUN npm install

WORKDIR /app/modules/MMM-DisneyWaitTimes

COPY /modules/MMM-DisneyWaitTimes/package.json /app/modules/MMM-DisneyWaitTimes/
RUN npm install

WORKDIR /app

COPY . /app
CMD ["node", "serveronly"]
