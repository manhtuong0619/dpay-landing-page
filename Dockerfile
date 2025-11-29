# Stage 1: Install dependencies
FROM node:20-alpine AS deps
# Install libc6-compat
RUN apk add --no-cache libc6-compat
# Set the working directory
WORKDIR /app
# Copy only package.json and yarn.lock to leverage Docker cache
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn install --production --frozen-lockfile && \
    yarn add sharp && \
    yarn cache clean && \
    rm -rf /usr/local/share/.cache/yarn


# Stage 2: Build the application
FROM node:20-alpine AS builder
# Set the working directory
WORKDIR /app
# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application code
COPY . .
# Build the application
RUN yarn build


# Stage 3: Run the application
FROM node:20-alpine AS runner
# Set the working directory
WORKDIR /app
# Copy necessary files from builder stage to runner stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Use a non-root user (node)
USER node
# Expose the application port
EXPOSE 3000
# Set the entrypoint command
ENTRYPOINT [ "node", "server.js" ]