export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      "mysql://root:password@127.0.0.1:3306/resume_optimization",
  },
};
