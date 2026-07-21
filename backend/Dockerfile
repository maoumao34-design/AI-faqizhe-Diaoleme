# Diaoleme AI proxy — production image for Render / Railway / Fly / any Docker host.
FROM node:20-alpine

WORKDIR /app

# Install deps first for better layer caching
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY server.mjs ./
COPY docs ./docs

# Runtime dirs (ephemeral on free PaaS; OK for demo)
RUN mkdir -p uploads data

ENV NODE_ENV=production
ENV PORT=8787
EXPOSE 8787

# Container-level probe (Render Dashboard Health Check Path should still be /api/health)
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||8787)+'/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# Platforms inject PORT; server.mjs reads process.env.PORT
CMD ["npm", "start"]
