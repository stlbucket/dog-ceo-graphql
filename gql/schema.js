const axios = require('axios');
const gql = require('graphql');
const GraphQLSchema = gql.GraphQLSchema;
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphQLList = gql.GraphQLList;

const Breed = require('./breed');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      breed: {
        type: Breed,
        args: {
          name: {
            type: GraphQLString
          }
        },
        resolve(yargs, args) {
          return {
            name: args.name
          };
        }
      },
      allBreeds: {
        type: new GraphQLList(Breed),
        resolve() {
          return axios.get('http://dog.ceo/api/breeds/list')
            .then(result => {
              return result.data.message.map(
                name => {
                  return {
                    name: name
                  }
                }
              )
            })
        }
      }
    }
  })
});

module.exports = schema;