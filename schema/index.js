const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const UserType = require('./types/user');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    me: {
      type: UserType,
      description: 'The current user identified by an api key',
      args: {
        key: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (obj, args, { loaders }) => {
        return loaders.usersByApiKeys.load(args.key);
      }
    }
  }
});


const ncSchema = new GraphQLSchema({
  query: RootQueryType
});


module.exports = ncSchema;