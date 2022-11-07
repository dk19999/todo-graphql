
exports.TodoQuery = {
    todos:(_, __, {db}) => {
        return db.todos
    },
    todo:(parent, args, {db}) => {
        const {id} = args
        return db.todos.find(({_id}) => _id === +id)
    }
}
