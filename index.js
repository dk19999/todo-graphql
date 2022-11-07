
const {ApolloServer, gql} = require('apollo-server')

const {TodoQuery} = require('./src/schema/todo/query')
const {db } = require('./src/schema/todo/db')
const { TodoTypes } =  require('./src/schema/todo/types.js');
const { TodoMutation } = require('./src/schema/todo/mutation');

const typeDefs = gql`

    type Query
    type Mutation
    ${TodoTypes}
    
`

const resolvers =  {
    Query:{
       ...TodoQuery
    },
    Mutation:{
        ...TodoMutation
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{db}
})

server.listen().then(({url}) => {
    console.log('server is ready at', url)
})
