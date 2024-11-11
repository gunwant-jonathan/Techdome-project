# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend code into the container
COPY backend/ .

# Expose the backend port
EXPOSE 3000

# Command to run the backend
CMD ["npm", "start"]
