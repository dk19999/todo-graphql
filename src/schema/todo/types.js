exports.TodoTypes = `
type Todo {
     name:String!
     completed:Boolean!
 } 

type Query {
     todos:[Todo!]!
     todo(id: ID!):Todo
} 
`;
