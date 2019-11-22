let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success1')
    },1000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('failed2')
    }, 500)
});

Promise.resolve([p1, p2]).then((result) => {
    console.log(result,'1')
}).catch((error) => {
    console.log(error,'2')  // 打开的是 'failed'
});