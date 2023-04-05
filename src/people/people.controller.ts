import { Controller, Get, Post, Body } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './dtos/people.dto';

@Controller('people')
export class PeopleController {
    peopleService: PeopleService;

    constructor() {
        this.peopleService = new PeopleService();
    }

  @Get()
  listPeople() {
    return this.peopleService.listPeople();
  }

  @Post()
  submitCredentials(@Body() body: CreatePeopleDto) {
    return this.peopleService.submitCredentials(body.name, body.age);
  }
}
