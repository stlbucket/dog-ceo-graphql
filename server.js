const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const schema = require('./gql/schema');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const customPort = process.argv[2]
const port = customPort ? customPort : 4000
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
});
