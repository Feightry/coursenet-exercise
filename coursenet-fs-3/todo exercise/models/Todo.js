const fs = require('fs');

class Todo {
    constructor(id, task, status, created_at, completed_at) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }
    
    static list() {
        let datas = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

        datas = datas.map(data => {
            const { id, task, status, created_at, completed_at } = data;
            return new Todo(id, task, status, created_at, completed_at);
        });

        return datas;
    }

    static add(params) {
        let datas = this.list();
        let id;
        if (datas.length > 0)
        {
            let lastIndex = datas.length - 1;
            id = datas[lastIndex].id + 1;
        }
        else
        {
            id = 1;
        }
        const [task] = params;
        const now = Date();
        let dataClass = new Todo(id, task, false, now, null);

        datas.push(dataClass);
        this.save(datas);

        return `'${task}' has been created!`;
    }

    static delete(params) {
        let datas = this.list();
        const id = Number(params);
        let temptask = datas[id-1].task;

        datas = datas.filter(data => data.id !== id);
        this.save(datas);

        return `"${temptask}" has been removed!`;
    }

    static update(params) {
        let datas = this.list();
        let [id, task] = params;
        let oldtask = datas[id-1].task;

        datas = datas.map(data => {
            if (data.id === Number(id)) 
            {
                data.task = task;
            }
            return data;
        });

        this.save(datas);

        return `"${oldtask}" has been changed to "${task}"!`;
    }

    static complete(params) {
        let datas = this.list();
        let id = Number(params);
        const now = Date();
        let temptask = datas[id-1].task;

        datas = datas.map(data => {
            if (data.id === id)
            {
                data.status = true;
                data.completed_at = now;
            }
            return data;
        });

        this.save(datas);

        return `"${temptask}" has been completed!`;
    }

    static uncomplete(params) {
        let datas = this.list();
        let id = Number(params);
        let temptask = datas[id-1].task;

        datas = datas.map(data => {
            if (data.id === id)
            {
                data.status = false;
                data.completed_at = null;
            }
            return data;
        });

        this.save(datas);

        return `"${temptask}" has been uncompleted!`;
    }

    static save(datas) {
        let stringDatas = JSON.stringify(datas, null, 3);
        fs.writeFileSync('./data.json', stringDatas);
    }
}

module.exports = Todo;