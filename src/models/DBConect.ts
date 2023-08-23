import { conectedDatabase } from "../data-source";
import { User } from "./User";
const userRepository = conectedDatabase.getRepository(User)
export default userRepository