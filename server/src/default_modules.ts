import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./modules/user/user.model";


export const envmodule = ConfigModule.forRoot({
  envFilePath:'.env'
})

export const dbmodule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
  models: [UserModel],
  autoLoadModels: true
})