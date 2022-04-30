class View {
    static help() {
        console.log('Todo List command list: ');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task>');
        console.log('node todo.js update <id> <task>');
        console.log('node todo.js delete <id>');
        console.log('node todo.js complete <id>');
        console.log('node todo.js uncomplete <id>')
    }

    static list(datas) {
        datas.forEach(data => {
            const { id, task, status } = data;
            if (status === true)
            {   
                let charX = "X";
                console.log(`${id}. [${charX}] ${task}`);
            }
            else
            {
                let charX = " ";
                console.log(`${id}. [${charX}] ${task}`);
            }
        });     
        //console.log(datas);
    }

    static message(msg) {
        console.log(msg);
    }
}

module.exports = View