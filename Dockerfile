# Use an official Node.js runtime
FROM node:23-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD [ "node", "server.js" ]
