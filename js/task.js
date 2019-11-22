/**
 * 控制最大并发
 * @param maxTaskConut 默认最大并发5
 * @constructor
 */
function Task(maxTaskConut = 5) {
    // maxTaskConut 最大任务数

    let currTaskConut = 0; // 当前运行线程数
    let taskList      = []; // 任务列表

    this.add = function (fn) {
        console.log(fn)
        taskList.push(fn);
        console.log('taskList',taskList)
        run();
    };

    function isArray(data) {
        return Object.prototype.toString.call(data).indexOf('Array') > -1;
    }

    function isFunction(data) {
        return Object.prototype.toString.call(data).indexOf('Function') > -1;
    }


    function getFirst() {
        if (!isArray(taskList) || taskList.length === 0) return null;
        return taskList.shift();
    }

    function init() {
        currTaskConut--;
        run();
    }

    function run() {

        if (currTaskConut >= maxTaskConut) return;
        let length = maxTaskConut - currTaskConut;
        if (length > taskList.length) length = taskList.length;
        try {
            for (let i = 0; i < length; i++) {

                let fn = getFirst();
                if (fn && isFunction(fn)) {
                    currTaskConut++;
                    fn(init);
                }
            }
        } catch (e) {

        }
    }
}
let task = new Task();

// export default Task;
for (let i=0;i<10;i++){
    task.add((callback) => {
        // 模拟异步
        callback();
        setTimeout(() => {
            // callback();
            console.log(i)
        }, 300)
    });
}
