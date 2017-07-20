const axios = require('axios');
const gql = require('graphql');
const GraphQLSchema = gql.GraphQLSchema;
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphQLList = gql.GraphQLList;

const Breed = new GraphQLObjectType({
  name: 'Breed',
  fields: {
    name: {
      type: GraphQLString
    },
    allImages: {
      type: new GraphQLList(GraphQLString),
      resolve (breed) {
        return axios.get(`http://dog.ceo/api/breed/${breed.name}/images`)
          .then(result => {
            return result.data.message;
          })
      }
    },
    randomImage: {
      type: GraphQLString,
      resolve (breed) {
        return axios.get(`http://dog.ceo/api/breed/${breed.name}/images/random`)
          .then(result => {
            return result.data.message;
          })
      }
    }
  }
})

module.exports = Breed;