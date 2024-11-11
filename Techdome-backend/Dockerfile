# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the frontend code into the container
COPY frontend/ .

# Expose the frontend port
EXPOSE 5000

# Command to run the frontend
CMD ["npm", "start"]
