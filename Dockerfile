
FROM node:20-alpine 

WORKDIR /app


ENV NODE_ENV production


COPY  /app/.next/standalone ./
COPY  /app/.next/static ./.next/static
COPY  /app/public ./public


EXPOSE 3000


CMD ["node", "server.js"] 