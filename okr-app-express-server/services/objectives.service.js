import {faker} from "@faker-js/faker"
import {randomInt} from "node:crypto";

export class ObjectivesService {
    // Generate a new key result object each time
    generateKeyResult() {
        return {
            title: faker.company.buzzPhrase(),
            initialValue: faker.number.int({min: 0, max: 0}),
            currentValue: faker.number.int({min: 0, max: 100}),
            targetValue: faker.number.int({min: 1, max: 100}),
            metric: faker.company.buzzAdjective()
        };
    }

    // Generate a new objective object each time
    generateObjective() {
        return {
            id: faker.string.uuid(),
            title: faker.company.buzzPhrase(),
            keyResults: Array.from({length: randomInt(1, 9)}, () => this.generateKeyResult())
        };
    }

        fetchAll() {
        return Array.from({length: 9}, () => this.generateObjective());
    }
}


