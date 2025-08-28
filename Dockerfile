# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json early for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the remaining application code
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
