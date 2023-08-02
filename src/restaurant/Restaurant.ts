import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';
import { Detail_Restaurant } from './Detail_Restaurant';
@Entity()
export class Restaurant {
  @PrimaryColumn('increment')
  rest_id!: number;

  @OneToMany(() => Detail_Restaurant, (detail_rest) => detail_rest.user_id)
  detail_rest?: Detail_Restaurant[];

  @Column({ type: 'varchar', nullable: false })
  rest_name!: string;

  @Column({ type: 'double', nullable: false })
  lat!: number;

  @Column({ type: 'double', nullable: false })
  lng!: number;

  @Column({ type: 'float', nullable: false })
  avg_start!: number;
}
