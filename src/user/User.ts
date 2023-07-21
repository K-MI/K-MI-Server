import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('increment')
  user_id!: number;

  @Column({ type: 'varchar', nullable: false })
  user_name!: string;

  @Column({ type: 'varchar', nullable: false })
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 7, nullable: false })
  birth!: string;

  @Column({ type: 'varchar', length: 7, nullable: false })
  email!: string;
}
