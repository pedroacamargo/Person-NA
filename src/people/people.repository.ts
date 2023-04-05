import { readFile, writeFile } from "fs/promises";
let actualId = 1;

export class PeopleRepository {
    async listPeople() {
        const doc = await readFile('people.json','utf8');
        const people = JSON.parse(doc)

        return people
    }

    async submitCredentials(name: string, age: number) {
        const doc = await readFile('people.json','utf8');
        const people = JSON.parse(doc);
        
        people[actualId.toString()] = {name, age}
        actualId++;

        await writeFile('people.json', JSON.stringify(people));
    }
}