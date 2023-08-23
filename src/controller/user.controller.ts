import { Request, Response } from "express";
import UserService from "../services/user.service";


export default class UserController{

  async signUpUser(req: Request, res: Response){
  const {email_user, nome_user, senha_user, tel_user, tel_emg_user} = req.body;
  await new UserService().signUser(email_user, nome_user, senha_user, tel_user, tel_emg_user);
  }

  
}