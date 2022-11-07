
const {ApolloServer, gql} = require('apollo-server')

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
})

server.listen().then(({url}) => {
    console.log('server is ready at', url)
})
