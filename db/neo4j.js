import neo4j from "neo4j-driver";

const Client = require("../model/Client");

const neo4jUri = process.env.NEO4J_URI;
let neo4jVersion = process.env.NEO4J_VERSION;
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
    console.log(client);
    const result = await session.run(
        'CREATE (c:Client {name: $name, amount: $amount }) RETURN c',
        { name: client.name, amount: client.amount }
    )

    console.log(result);

    const singleRecord = result.records[0]
    console.log(singleRecord);
    const node = singleRecord.get(0) 
    console.log(node);
    
    console.log(node.properties.name)

    return new Client(node);
}