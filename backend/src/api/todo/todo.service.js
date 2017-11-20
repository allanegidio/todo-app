const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);

/**
 * "new" propertie need set to true, to return the updated data.
 * "runValidators" propertie need set to true, to validate required fields in Schema.
 */
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;