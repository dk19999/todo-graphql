
exports.TodoQuery = {
    todos:(_, __, {db}) => {
        return db.todos
    },
   
}
