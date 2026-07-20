# Diaoleme AI proxy — production image for Render / Railway / Fly / any Docker host
FROM node:20-alpine

WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json ./
RUN npm install --omit=dev && npm cache clean --force

# App source (no local uploads / records / secrets)
COPY server.mjs ./
COPY docs ./docs

ENV NODE_ENV=production
ENV PORT=8787

# Ensure writable dirs for demo uploads + JSON records (ephemeral on free tiers)
RUN mkdir -p uploads data

EXPOSE 8787

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/api/health || exit 1

CMD ["npm", "start"]
