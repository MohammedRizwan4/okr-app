import express from 'express';
import {faker} from "@faker-js/faker"
import {randomInt} from "node:crypto";
// import cors from "cors"

const app = express();
const PORT = 3003;
// app.use(cors())
const MOCK_KEY_RESULT = {
    title: faker.company.buzzPhrase(),
    initialValue: faker.number.int({min: 0, max: 0}),
    currentValue: faker.number.int({min: 0, max: 100}),
    targetValue: faker.number.int({min: 1, max: 100}),
    metric: faker.company.buzzAdjective()
}

const MOCK_OBJECTIVE = {
    id: faker.string.uuid(),
    title: faker.company.buzzPhrase(),
    keyResults: getKeyResults()
};


function getObjectives() {
    return Array.from({length: 9}, (_, index) => MOCK_OBJECTIVE)
}

function getKeyResults() {
    return Array.from({length: randomInt(1, 9)}, (_, index) => MOCK_KEY_RESULT);

}

getObjectives()

app.get("/objectives", (req, res) => {
    res.status(200).json(getObjectives());
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})

