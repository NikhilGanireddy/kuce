import {MongoClient} from "mongodb";

const URL = process.env.MONGO_URL
const options= {}

let client = new MongoClient(URL, options)
let ClientPromise =client.connect()

export default ClientPromise
