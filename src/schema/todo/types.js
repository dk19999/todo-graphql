exports.TodoTypes = `
type Todo {
     name:String!
     completed:Boolean!
 } 

type Query {
     todos:[Todo!]!
     todo(id: ID!):Todo
} 

extend type Mutation {
     todoCreate(input:TodoCreateInput!):Todo
     todoUpdate(input:TodoUpdateInput!):Todo
     todoDelete(id:ID!):Boolean!
}

input TodoCreateInput {
     name:String!
     completed:Boolean!
}

input TodoUpdateInput {
     id:ID!
     name:String!
     completed:Boolean!
}

`;
