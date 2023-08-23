import { DataSource } from "typeorm"
import { User } from "./models/User"


export const conectedDatabase = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "continuedb",
    entities: [
      User
  ],
})