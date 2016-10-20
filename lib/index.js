const graphqlHTTP = require('express-graphql');
const app = require('express')();

const ncSchema = require ('../schema');

app.use('/graphql', graphqlHTTP({
	schema: ncSchema,
	graphiql: true
}));


const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
