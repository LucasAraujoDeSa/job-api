import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('job')
export default class Job{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description:string;

  @Column()
  company_name:string;

  @Column()
  contact:string;

  @CreateDateColumn()
  created_at:Date;

  @UpdateDateColumn()
  updated_at:Date;
}
