import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../user/User';
import { Restaurant } from './Restaurant';
@Entity()
export class Detail_Restaurant {
  @PrimaryColumn('increment')
  detail_rest_id!: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.detail_rest)
  rest_id!: Restaurant;

  @ManyToOne(() => User, (user) => user.detail_rest)
  user_id!: User;

  @Column({ type: 'varchar', nullable: false })
  menu!: string;

  @Column({ type: 'varchar', nullable: false })
  price!: string;

  @Column({ type: 'int', nullable: false })
  star!: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  comment!: string;
}
