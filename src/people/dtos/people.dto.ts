import { IsNumber, IsString } from "class-validator";

// DTO's have the purpose to filter and authenticate the input in the http request, in this case the name has to be a string and the age a number.

export class CreatePeopleDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}