# Mustaghni.org

## Install dependencies

```bash
pnpm install # npm install # yarn install
```

## Environment variables

An example of these environment variables can be found in the `.env.example` file in the root directory of this project. This file lists all the environment variables used by the application, along with example values.

To use these variables, copy the `.env.example` file to a new file named `.env` in the same directory. Replace the example values in the `.env` file with your actual values.

Here is a list of all the environment variables used by the application:

- **Upstash** only used in production for incrementing searches count

- **Sanity** only required if you want to change the headless CMS

## Run the development server

```bash
pnpm dev # npm run dev # yarn dev
```
