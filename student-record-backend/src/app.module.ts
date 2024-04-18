import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'muaz',
      password: '1234',
      database: 'student_record_dev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule { }