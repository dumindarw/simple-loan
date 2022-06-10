import { graphqlUploadKoa } from 'graphql-upload';
import Koa from 'koa';
const cors = require('@koa/cors');

import bodyParser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import mount from 'koa-mount';

import ClientSchema from './schema/client.schema';

const port = process.env.PORT || 8050;
const app = new Koa();

app.use(bodyParser());
app.use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 100 }))
app.use(cors());

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: ClientSchema,
      graphiql: true,
    }),
  ),
);

app.listen(port, () => {
  console.log(`running on port ${port}`)
})

app.on('error', err => {
  console.error('server error', err)
});
  
  
module.exports = app;