module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [
    process.env.NODE_ENV == 'dev' ?
    "./src/modules/jobs/infra/typeorm/entities/*.ts"
    :
    "./dist/modules/jobs/infra/typeorm/entities/*.js"
  ],
  migrations:[
    process.env.NODE_ENV == 'dev' ?
    "./src/shared/infra/typeorm/migrations/*.ts"
    :
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  cli: {
    migrationsDir:"./src/shared/infra/typeorm/migrations"
  },
  extra: {
    ssl: process.env.NODE_ENV == 'dev' ? false : { rejectUnauthorized: false }
  }
}
