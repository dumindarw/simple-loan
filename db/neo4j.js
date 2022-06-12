import neo4j from "neo4j-driver";

const Client = require("../model/Client");

const neo4jUri = process.env.NEO4J_URI;
let neo4jVersion = process.env.NEO4J_VERSION;

console.log(neo4jUri);

if (neo4jVersion === '') {
  // assume Neo4j 4 by default
  neo4jVersion = '4';
}
let database = process.env.NEO4J_DATABASE;
if (!neo4jVersion.startsWith("4")) {
  database = null;
}
const driver = neo4j.driver(
    neo4jUri,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD),
);

const session = driver.session()

console.log(`Database running at ${neo4jUri}`)


export const CreateClient = async (client) => {

    const result = await session.run(
        'CREATE (c:Client {name: $name, amount: $amount, image: $image }) RETURN c',
        { name: client.name, amount: client.amount, image: client.image }
    )


    const singleRecord = result.records[0]
    const node = singleRecord.get(0) 

    return {name: node.properties.name, amount: node.properties.amount, image: node.properties.image};
}

export const GetClients = async () => {

  const result = await session.run(
    'MATCH (c:Client) RETURN c'
  )

  return result.records.map(record => {
    return record.get(0).properties;
  })
  
}