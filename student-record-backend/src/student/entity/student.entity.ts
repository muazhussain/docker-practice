import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int' })
    roll: number;

    @Column({ type: 'varchar' })
    name: string;
}