import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryColumn('increment')
  rest_id!: number;

  @Column({ type: 'varchar', nullable: false })
  rest_name!: string;

  @Column({ type: 'double', nullable: false })
  lat!: number;

  @Column({ type: 'double', nullable: false })
  lng!: number;

  @Column({ type: 'float', nullable: false })
  avg_start!: number;
}
