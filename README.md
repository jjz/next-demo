# Next.js Standalone Build Testing Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), specifically designed to test Next.js standalone build functionality.

## Project Purpose

The main purpose of this project is to test and demonstrate:
1. Next.js standalone build functionality
2. Multi-language support implementation
3. Docker containerization of Next.js applications

## Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Build Process

The project includes a custom build script (`build.sh`) that handles the standalone build process:

```bash
#!/bin/bash

# Remove previous build
rm -rf .next

# Install dependencies
yarn

# Build the application
yarn run build

# Copy necessary static files for standalone mode
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/ 
```

To build the project, simply run:

```bash
# Make the script executable
chmod +x build.sh

# Run the build script
./build.sh
```

## Multi-language Support

The project implements internationalization through the `/src/messages` directory, which contains:
- `en.json` - English translations
- `zh.json` - Chinese translations

These files provide translation strings for all UI elements across the application.

## Docker Deployment

The project includes a Dockerfile configured for the Next.js standalone build:

```dockerfile
FROM node:20-alpine 

WORKDIR /app

ENV NODE_ENV production

COPY  /app/.next/standalone ./
COPY  /app/.next/static ./.next/static
COPY  /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"] 
```

To build and run the Docker container:

```bash
# Build the container
docker build -t nextjs-standalone-test .

# Run the container
docker run -p 3000:3000 nextjs-standalone-test
```

## Common Commands

```bash
# Development mode
yarn dev

# Build project
yarn build

# Production mode
yarn start

# Run linting
yarn lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) - deployment options.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
