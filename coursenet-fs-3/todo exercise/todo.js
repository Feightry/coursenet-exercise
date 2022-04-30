const command = process.argv[2];
const params = process.argv.slice(3);
const todoController = require('./controllers/todoController');

switch (command) {
    case 'help':
        todoController.help();
        break;
    case 'list':
        todoController.list();
        break;
    case 'add':
        todoController.add(params);
        break;
    case 'delete':
        todoController.delete(params);
        break;
    case 'update':
        todoController.update(params);
        break;
    case 'complete':
        todoController.complete(params);
        break;
    case 'uncomplete':
        todoController.uncomplete(params);
        break;
    default:
        todoController.message('Unknown Command!!');
}