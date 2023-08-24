
import { Console } from "winston/lib/winston/transports";
import userRepository from "../models/DBConect";
import { User } from "../models/User";
import { v4 } from "uuid"

export default class UserService {

  async signUser(email_user: string, nome_user: string, senha_user: string, tel_user: number, tel_emg_user: number){
      const newUser = new User();
      newUser.id_user = v4();
      newUser.email_user = email_user;
      newUser.nome_user = nome_user;
      newUser.senha_user = senha_user;
      newUser.tel_user = tel_user;
      newUser.tel_emg_user = tel_emg_user;
      await userRepository.save(newUser);
  }
  async loginUser(email_user: string, senha_user: string){
    try {
    const foundUser = userRepository.findOne({
        select: {
            id_user: true,
        },
        where: {
            email_user: email_user,
            senha_user: senha_user,
        },
    })
    return foundUser;
    } 
    catch (err) {
      return console.log("Deu ruim")
    }

}
}