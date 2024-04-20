import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AppController } from './app.controller';
import { StudentEntity } from './student/entity/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'muaz',
      password: '1234',
      database: 'student_record_db',
      entities: [StudentEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentModule,
  ],
  controllers: [AppController],
})
export class AppModule { }