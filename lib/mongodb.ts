import { MongoClient } from "mongodb"

// Only attempt to connect if MONGODB_URI is available and valid
const uri = process.env.MONGODB_URI || ""

// Validate the connection string
const isValidConnectionString = uri && (uri.startsWith("mongodb://") || uri.startsWith("mongodb+srv://"))

if (!isValidConnectionString) {
  console.warn("Invalid/Missing MongoDB connection string. MongoDB features will be disabled.")
}

const options = {
  maxPoolSize: 10,
}

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

// Only set up MongoDB if we have a valid connection string
if (isValidConnectionString) {
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default async function getMongoClient() {
  if (!clientPromise) {
    throw new Error("MongoDB connection is not available. Check your MONGODB_URI environment variable.")
  }
  return clientPromise
}

// Helper function to check if MongoDB is available
export function isMongoAvailable() {
  return isValidConnectionString && !!clientPromise
}
