import { PeopleRepository } from "./people.repository";

export class PeopleService {
    peopleRepo: PeopleRepository;

    constructor() {
        this.peopleRepo = new PeopleRepository();
    }

    async listPeople() {
        return this.peopleRepo.listPeople();
    }

    async submitCredentials(name: string, age: number) {
        return this.peopleRepo.submitCredentials(name,age);
    }
}