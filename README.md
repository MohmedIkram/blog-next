# Next.js App with PostgreSQL and Prisma ORM

This project is a Next.js application using **Prisma ORM** for database management and **PostgreSQL** as the database. The app is built to provide a seamless experience in setting up, running, and developing with Prisma and PostgreSQL.

## Features

- **Next.js**: React framework with server-side rendering and API routes
- **Prisma ORM**: Type-safe database queries with migrations and data modeling
- **PostgreSQL**: Relational database

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [PostgreSQL](https://www.postgresql.org/) (local or hosted)
- [Prisma](https://www.prisma.io/)

## Getting Started

Follow these steps to set up and run the project.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

Use your preferred package manager to install dependencies.

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root of your project and add the following:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your PostgreSQL database credentials.

### 4. Prisma setup

Run the following commands to initialize Prisma and generate the client:

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the development server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Migrations

Whenever you make changes to your Prisma schema (`prisma/schema.prisma`), use the following commands to migrate the database and generate the updated Prisma client:

```bash
npx prisma migrate dev --name migration-name
npx prisma generate
```

## Scripts

The following scripts are available for running the project:

- `dev`: Runs the Next.js development server
- `build`: Creates an optimized production build
- `start`: Starts the production server after the build
- `prisma generate`: Regenerates the Prisma Client
- `prisma migrate dev`: Applies migrations during development
- `prisma migrate deploy`: Deploys migrations in production environments

## Deployment

This app can be easily deployed on [Vercel](https://vercel.com) or any platform that supports Node.js. For deploying on Vercel:

1. Push your repository to GitHub/GitLab/Bitbucket.
2. Sign in to Vercel and create a new project.
3. Connect your Git repository, and Vercel will automatically build and deploy the app.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)