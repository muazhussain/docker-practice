import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from '../entity/student.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStudentRecordDto } from '../dtos/create-student-record.dto';
import { UpdateStudentRecordDto } from '../dtos/update-student-record.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity) private readonly studentRepo: Repository<StudentEntity>,
    ) { }

    async createStudentRecord(payload: CreateStudentRecordDto): Promise<StudentEntity> {
        try {
            const prev = await this.studentRepo.findOne({
                where: {
                    roll: payload.roll,
                },
            });
            if (prev) {
                throw new BadRequestException('Student Already Exists!');
            }
            const newRecord = this.studentRepo.create(payload);
            return await this.studentRepo.save(newRecord);
        } catch (e) {
            throw e;
        }
    }

    async getStudentByRoll(roll: number): Promise<StudentEntity> {
        try {
            const record = await this.studentRepo.findOne({
                where: {
                    roll: roll,
                },
            });
            if (!record) {
                throw new NotFoundException('Invalid Roll Number');
            }
            return record;
        } catch (e) {
            throw e;
        }
    }

    async updateStudent(roll: number, payload: UpdateStudentRecordDto): Promise<StudentEntity> {
        try {
            const record = await this.studentRepo.findOne({
                where: {
                    roll: roll,
                },
            });
            if (!record) {
                throw new NotFoundException('Invalid Roll Number');
            }
            Object.assign(record, payload);
            await this.studentRepo.update(record.id, record);
            return record;
        } catch (e) {
            throw e;
        }
    }

    async deleteRecord(roll: number): Promise<DeleteResult> {
        try {
            const record = await this.studentRepo.findOne({
                where: {
                    roll: roll,
                },
            });
            if (!record) {
                throw new NotFoundException('Invalid Roll Number');
            }
            return await this.studentRepo.softDelete(record.id);
        } catch (e) {
            throw e;
        }
    }
}
