const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
	} = require('graphql');

//The root query type is where we ask questions
const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',

	fields: {
		hello: {
			type: GraphQLString,
			resolve: () => 'world'
		}
	}
});


const ncSchema =  new GraphQLSchema({
		query: RootQueryType
});


module.exports = ncSchema;