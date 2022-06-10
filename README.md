## Dev Only : Start Neo4J DB First

```
docker run -dt --name neo4j --publish=7474:7474 --publish=7687:7687  --env NEO4J_AUTH=neo4j/neo456 --volume=neo4j_data:/data neo4j
```

## Access Neo4J Graph Database

http://localhost:7474/browser/

database: neo4j
username: neo4j
pasword: neo456

## Start Backend

From root directory, run `npm install` then `npm start`

## Start Frontend

Navigate to `frontend` directory and run `npm install` then `npm start` 

### Mutations (Includes Multipart File Upload)

```

{"variables":{"name":"Duminda","amount":1234.77,"file":null},"query":"mutation ($name: String, $amount: Float, $file: Upload) {\n  ADD_CLIENT(name: $name, amount: $amount, file: $file) {\n    name\n    __typename\n  }\n}"}


{"1":["variables.file"]}


```

### Query (Retreive All)

```
query{
  LIST_CLIENTS{
    name,
    amount
  }
}
```

