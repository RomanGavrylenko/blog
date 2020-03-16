import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";

// create and setup express app
const app = express();
app.use(bodyParser.json());

// register routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(5000, () => {
    console.log('we star tserver at node')
});