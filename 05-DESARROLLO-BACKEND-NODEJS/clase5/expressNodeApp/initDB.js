import readline from 'node:readline'
import { connectMongoose } from './lib/connectMongoose.js'
import Agent from './models/Agent.js'

const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

// llamo a ask por seguridad antes del reseteo de la base de datos
const questionResponse = await ask('Are you sure about RESETTING the DATABASE to DEFAULT values?\n')
if (questionResponse.toLowerCase().trim() !== 'yes') {
  console.log('Operation aborted')
  process.exit()
}

// llamo a la funcion initAgents para resetar la base de datos
await initAgents()

// creo funcion para insertar agentes
async function initAgents() {
  // delete all agents
  const deleteResult = await Agent.deleteMany()
  console.log(`Deleted ${deleteResult.deletedCount} agents`)


  // create inital agents
  const insertResult = await Agent.insertMany([
    {
      name: 'Smith',
      age: 31
    },
    {
      name: 'Brown',
      age: 42
    },
    {
      name: 'Jones',
      age: 38
    }
  ])
  console.log(`Created ${insertResult.length} agents`)
}

function ask (questionText) {
  return new Promise((resolve, reject) => {
    const consoleInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    consoleInterface.question(questionText, answer => {
      consoleInterface.close()
      resolve(answer)
    })
  })
}