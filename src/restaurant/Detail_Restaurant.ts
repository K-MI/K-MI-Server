import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Detail_Restaurant {
  @PrimaryColumn('increment')
  detail_rest_id!: number;

  @Column({ type: 'varchar', nullable: false })
  menu!: string;

  @Column({ type: 'varchar', nullable: false })
  price!: string;

  @Column({ type: 'int', nullable: false })
  star!: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  comment!: string;
}
