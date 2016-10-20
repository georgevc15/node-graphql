const { graphql } = require('graphql');


const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

//read query
const query = process.argv[2];
const ncSchema = require ('../schema');

//execute the query against the defined server schema
graphql(ncSchema, query).then(result => {
	console.log(result);
});

