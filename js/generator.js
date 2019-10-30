/**
 * 生成器函数有一个特点,需要加*
 * 生成器函数有若干个阶段,如何划分这些阶段呢
 */
function *go() {
    console.log(1);
    // 此处的b供外界传入
    let b=yield 'a';
    console.log(3);
    let c=yield b;
    return c
}
// 生成器函数和普通的函数不一样,调用他的话函数不会立刻执行
// 他会返回此生成器的迭代器,迭代器是一个对象,每调用一次next()就可以返回一个值的对象
let it=go();
// 第一次调用next会返回一个对象,有两个属性, value:就是yield后面的值 done:是否迭代完成
let go1=it.next(); // 第一个next不需要传参
console.log(go1); // { value: 'a', done: false }
let go2=it.next('j');
console.log(go2); // { value: 'j', done: false }
let go3 =it.next(); // 没传参 value:undefined
console.log(go3); // { value: undefined, done: true }