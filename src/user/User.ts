import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';
import { Detail_Restaurant } from '../restaurant/Detail_Restaurant';
@Entity()
export class User {
  @PrimaryColumn('increment')
  user_id!: number;

  @OneToMany(() => Detail_Restaurant, (detail_rest) => detail_rest.user_id)
  detail_rest?: Detail_Restaurant[];

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
