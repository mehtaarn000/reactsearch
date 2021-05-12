import express from "express"
import register from "@react-ssr/express/register.js"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"

dotenv.config()

const app = express()
app.use(bodyParser());

interface IUser extends mongoose.Document {
    username: string,
    password: string,
    email: string,
    url: string
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    url: String
}, {
    versionKey: false
})

const User: mongoose.Model<IUser> = mongoose.model('User', userSchema, "users");

await register(app)
app.get("/", async (_req, res) => {
    console.log("helloworld")
    const uri = process.env.MONGO_URI
    mongoose.connect(String(uri), {useNewUrlParser: true, useUnifiedTopology: true});

    const docs = await User.find({}, {_id: 0, username: 1, password: 1, email: 1, url: 1});
    res.render("App", {props: { form: true, documents: docs}})
})

app.post("/", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const url = req.body.url

    const uri = process.env.MONGO_URI
    mongoose.connect(String(uri), {useNewUrlParser: true, useUnifiedTopology: true});
    const doc = new User({ username: String(username), password: String(password), email: String(email), url: String(url) })

    const resp = await doc.save()
    console.log(resp)

    const docs = await User.find({}, {_id: 0, username: 1, password: 1, email: 1, url: 1});
    res.render("App", {props: {form: true, documents: docs}})
})

app.listen(3000)
