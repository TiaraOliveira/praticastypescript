import express from "express";
import cors from "cors";
import * as controllers from './Controllers/controllers'


const index = express();

index.use(cors(), express.json());


index.post('/battle', controllers.fazerSoma)
index.get('/ranking', controllers.fazerSoma)

const PORT: number = 5000

index.listen(PORT, () =>  console.log(`Server running successfully at PORT ${PORT}.`))