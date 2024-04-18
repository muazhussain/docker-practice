import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entity/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentEntity])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
