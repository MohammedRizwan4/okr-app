import express from 'express';
import cors from 'cors'
import {router} from "./routers/objectives.router.js";

const app = express();
const PORT = 3003;

app.use(cors(
    {
        origin: 'http://localhost:5173/',
        optionsSuccessStatus: 200
    }
))

app.use("/objectives", router);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})

