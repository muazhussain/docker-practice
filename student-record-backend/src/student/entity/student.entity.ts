import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    roll: number;

    @Column()
    name: string;
}