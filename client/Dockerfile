FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Build the SvelteKit app
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy the build output
COPY --from=build /app/build ./
COPY --from=build /app/package.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port the app runs on
ENV PORT=3277
EXPOSE $PORT

# Set the command to start the node server
CMD ["node", "./"]
