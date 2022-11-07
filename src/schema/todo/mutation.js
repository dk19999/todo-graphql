exports.TodoMutation = {
  todoCreate: (_, { input }, { db }) => {
    const { name, completed } = input;

    const newTodo = {
      id: db.todos.length + 1,
      name,
      completed,
    };

    db.todos.push(newTodo);

    return newTodo;
  },
  todoUpdate: (_, { input }, { db }) => {
    const { id } = input;
    if (!id) return null;
    const todoIndex = db.todos.findIndex(({ _id }, index) => _id === +id);

    if (todoIndex === -1) return null;

    db.todos[todoIndex] = {
      ...db.todos[todoIndex],
      ...input,
    };

    return input;
  },
  todoDelete: (_, { id }, { db }) => {
    try {
        console.log(id)
      db.todos = db.todos.filter(({_id}) => _id !== +id);
      return true;
    } catch (err) {
      return false;
    }
  },
};
