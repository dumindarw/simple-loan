import Koa from 'koa';


import bodyParser from 'koa-bodyparser';
import { graphqlHTTP } from 'koa-graphql';
import mount from 'koa-mount';

import ClientSchema from './schema/client.schema';

const port = process.env.PORT || 3001;
const app = new Koa();

app.use(bodyParser());


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
    log.error('server error', err)
  });
  
  
  module.exports = app;