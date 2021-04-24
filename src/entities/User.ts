import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    /** Se o id não vier preenchido (caso de um update ele já vem)
     * ele cria o uuid
     */
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
