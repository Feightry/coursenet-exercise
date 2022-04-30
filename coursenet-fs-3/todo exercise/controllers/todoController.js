const Todo= require('../models/Todo');
const View = require('../views/View');

class todoController {
    static help() {
        View.help();
    }
    static list() {
        const todos = Todo.list();
        View.list(todos);
    }
    static add(params) {
        const feedback = Todo.add(params);
        View.message(feedback);
    }
    static delete(params) {
        const feedback = Todo.delete(params);
        View.message(feedback);
    }
    static update(params) {
        const feedback = Todo.update(params);
        View.message(feedback);
    }
    static complete(params) {
        const feedback = Todo.complete(params);
        View.message(feedback);
    }
    static uncomplete(params) {
        const feedback = Todo.uncomplete(params);
        View.message(feedback);
    }
    static message(msg) {
        View.message(msg);
    }
}

module.exports = todoController;