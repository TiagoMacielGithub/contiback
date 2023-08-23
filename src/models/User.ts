import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id_user: string;

  @Column()
  email_user: string;

  @Column()
  nome_user: string;

  @Column()
  senha_user: string;

  @Column()
  tel_user: number;

  @Column()
  tel_emg_user: number;
}