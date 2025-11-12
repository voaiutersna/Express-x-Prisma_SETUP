import { defineConfig, env } from "prisma/config";
// prisma.config.ts (วางไว้ที่โฟลเดอร์เดียวกับ package.json)
import "dotenv/config";               // ← ให้ Prisma โหลด .env เข้ามาก่อน

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
