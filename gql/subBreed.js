const axios = require('axios');
const gql = require('graphql');
const GraphQLSchema = gql.GraphQLSchema;
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphQLList = gql.GraphQLList;

const Breed = new GraphQLObjectType({
  name: 'SubBreed',
  fields: {
    name: {
      type: GraphQLString
    },
    parentName: {
      type: GraphQLString
    },
    allImages: {
      type: new GraphQLList(GraphQLString),
      resolve (subBreed) {
        return axios.get(`http://dog.ceo/api/breed/${subBreed.parentName}/${subBreed.name}/images`)
          .then(result => {
            return result.data.message;
          })
      }
    },
    randomImage: {
      type: GraphQLString,
      resolve (subBreed) {
        return axios.get(`http://dog.ceo/api/breed/${subBreed.parentName}/${subBreed.name}/images/random`)
          .then(result => {
            return result.data.message;
          })
      }
    }
  }
})

module.exports = Breed;