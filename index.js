
const {ApolloServer, gql} = require('apollo-server')

const {TodoQuery} = require('./src/schema/todo/query')
const {db } = require('./src/schema/todo/db')
const { TodoTypes } =  require('./src/schema/todo/types.js');

const typeDefs = gql`

    ${TodoTypes}
    
`

const resolvers =  {
    Query:{
       ...TodoQuery
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
