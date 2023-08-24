import { Request, Response } from "express";
import UserService from "../services/user.service";


export default class UserController {

  async signUpUser(req: Request, res: Response) {
    const { email_user, nome_user, senha_user, tel_user, tel_emg_user } = req.body;
    await new UserService().signUser(email_user, nome_user, senha_user, tel_user, tel_emg_user);
    res.json("Criado com sucesso")
  }
  async loginUser(req: Request, res: Response) {
    const {email_user, senha_user} = req.body;
    const found = (await new UserService().loginUser(email_user, senha_user));
    res.send(found);
  }

}