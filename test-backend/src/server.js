// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqiKxOaKx5oE02MGxUEpjxj0n8CxhhLQ",
  authDomain: "pokedex-b1691.firebaseapp.com",
  projectId: "pokedex-b1691",
  storageBucket: "pokedex-b1691.appspot.com",
  messagingSenderId: "760827219857",
  appId: "1:760827219857:web:88f7ec617af58638fa9430",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb")


const app = express();

app.use(bodyParser.json());


const withDB = async (operations, res) => {
    try {

        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("test");
        operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to Pokedex', error });
    }
};


app.get('/api/articles/:name/add-comments', async (req, res) => {
    withDB((db) => {
    })
    const articleName = req.params.name;


    const articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();

});

app.post("/api/articles/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = db.collection("articles").findOne({ name: articleName });
        await db.collection("articles").updateOned(
            { name: articleName },
            {
                $set: {
                    comments: articleInfo.comments.concat({ username, text }),
                },
            }
        );
        const updatedArticleInfo = await db
            .collection('articles')
            .findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.listen(8000, () => console.log("Listening on port 8000"));