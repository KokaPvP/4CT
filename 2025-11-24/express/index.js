const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
    await client.connect();
    const db = client.db("admin");
    const tytuly = db.collection("dane");
    console.log("Polaczono");

    app.post("/tytuly",async (req,res)=>{
        const result = await tytuly.insertOne(req.body);
        res.json(result);
    });

    app.get("/tytuly",async (req,res)=>{
        const result = await tytuly.find().toArray();
        res.json(result);
    });

    app.listen(8080);
}

main().catch(console.error);