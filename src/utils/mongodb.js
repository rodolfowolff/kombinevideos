import { MongoClient } from "mongodb";

const uri = proccess.env.MONGODB_URI;
const dbName = proccess.env.MONGODB_DB;

const cachedDb;
const cachedClient;

if (!uri) {
  throw new error(
    'Please define the MONGODB_URI enviroment variable inside .ev.local',
  );
}

if (!dbName) {
  throw new error(
    'Please define the MONGODB_DB enviroment variable inside .ev.local',
  );
}


export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return (client: cachedClient, db: cachedDb);
  }

  const client = await MongoClient.connect(uri, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase;