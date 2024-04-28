import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { CreateStudentRecordDto } from '../dtos/create-student-record.dto';
import { UpdateStudentRecordDto } from '../dtos/update-student-record.dto';
import { ApiTags } from '@nestjs/swagger';
import { commonResponse } from 'src/common/output-message';

@ApiTags('Student Record')
@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) { }

    @Post()
    async createStudentRecord(@Body() payload: CreateStudentRecordDto) {
        try {
            console.log('payload: ', payload);
            const res = await this.studentService.createStudentRecord(payload);
            return commonResponse(true, 'Create Student Record Successfully', res);
        } catch (e) {
            return commonResponse(false, 'Create Student Record Failed', e);
        }
    }

    @Get(':roll')
    async getStudentRecordByRoll(@Param('roll') roll: number) {
        try {
            const res = await this.studentService.getStudentByRoll(roll);
            return commonResponse(true, 'Get Student Successfully', res);
        } catch (e) {
            return commonResponse(false, 'Get Student Failed', e);
        }
    }

    @Patch(':roll')
    async updateStudentRecord(@Param('roll') roll: number, @Body() payload: UpdateStudentRecordDto) {
        try {
            const res = await this.studentService.updateStudent(roll, payload);
            return commonResponse(true, 'Update Student Record Successfully', res);
        } catch (e) {
            return commonResponse(false, 'Update Student Failed', e);
        }
    }

    @Delete(':roll')
    async deleteStudentRecord(@Param('roll') roll: number) {
        try {
            const res = await this.studentService.deleteRecord(roll);
            return commonResponse(true, 'Delete Student Record Successfully', res);
        } catch (e) {
            return commonResponse(false, 'Delete Student Record Failed', e);
        }
    }
}
