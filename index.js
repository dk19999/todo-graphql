
const {ApolloServer, gql} = require('apollo-server')

const {db } = require('./src/schema/todo/db')

const typeDefs = gql`


    type Query{
        greeting:String
    }

`

const resolvers =  {
    Query:{
      greeting:() => 'Hello'
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
