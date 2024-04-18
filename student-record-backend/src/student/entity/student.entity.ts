import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity('student')
export class StudentEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    public updatedAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
    public deletedAt?: Date;

    @Column()
    roll: number;

    @Column()
    name: string;
}