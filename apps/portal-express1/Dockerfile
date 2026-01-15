
FROM node:20


RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY out/full/ .


RUN pnpm install


CMD ["node", "apps/portal-express1/index.js"]