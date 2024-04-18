import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentRecordDto {
    @ApiProperty({
        required: true,
        type: 'number',
    })
    @IsNumber()
    roll: number;

    @ApiProperty({
        required: true,
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}