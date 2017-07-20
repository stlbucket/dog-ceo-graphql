const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const schema = require('./gql/schema');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000);
