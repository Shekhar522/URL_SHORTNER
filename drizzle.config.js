// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./drizzle/migration",
//   schema: "./drizzle/schema.js",
//   dialect: "mysql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./drizzle/migration",
//   schema: "./drizzle/schema.js",
//   dialect: "mysql",

//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//     ssl: {
//       minVersion: "TLSv1.2",
//     },
//   },
// });

import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle/migration",
  schema: "./drizzle/schema.js",
  dialect: "mysql",

  dbCredentials: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
      rejectUnauthorized: false,
    },
  },
});