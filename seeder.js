const MongoClient = require('mongodb').MongoClient
const products = require('./mockData/products.json') // Assuming your products.js is in the same directory

const dbName = 'test' // Change to your database name

;(async () => {
  let client

  try {
    client = await MongoClient.connect(uri, { useUnifiedTopology: true })
    const db = client.db(dbName)
    const productsCollection = db.collection('products')

    const insertResult = await productsCollection.insertMany(products)
    console.log(insertResult)
    console.log(
      `Successfully inserted ${insertResult.insertedCount} documents!`
    )
  } catch (error) {
    console.error('Error inserting records:', error)
  } finally {
    if (client) {
      await client.close()
    }
  }
})()
