# Promise 对象是什么？如何实现它？

## Promise是什么？

`promise` 是一个 `es6`  中的得一个新的异步编程的解决方案，它是一个容器里面保存一个未来会启用的事件结果。它有三种状态：

1. `pending`  进行中
2. `resolved` 已成功
3. `rejected` 已失败

在 `es5` 的时代我们经常会使用回调函数来实现这一操作。但是写法令人烦恼如：
```
    const fs = require('fs');
    fs.readFile('1.txt', (err,data) => {
        fs.readFile('2.txt', (err,data) => {
            fs.readFile('3.txt', (err,data) => {
                //可能还有后续代码
            });
        });
    });
```
这样代码会变成一个多层级嵌套的形式，也就是我们常说的回调地狱，非常的难看（大量回调时如果少写一个反括号 找起来也是非常的痛苦）

如果改用 `Promise` 写法则为：
```
    const util = require('util');
    const fs = require('fs');
    const readFile = util.promisify(fs.readFile);

    readFile('1.txt')
        .then(data => {
            return readFile('2.txt');
        }).then(data => {
            return readFile('3.txt');
        }).then(data => {
            //...
        });
```
我们可以看到回调函数被以这种链式调用的方式呈现了，我们可以更清楚的知道程序按顺序做了哪些事情。

## Promise的基本用法
`Promise` 是一个构造函数， 用来生成 `Promise` 实例。

```
    const promise = new Promise((resolve, reject) => {
        // ... some
        if (true) {
            resolve(value)
        } else {
            reject(err)
        }
    })
```
`Promise` 对象默认有两个参数 `resolve` ，`reject` 他们都是函数。

1. `resolve`的作用是将 `Promise` 对象由进行中转换为已完成
2. `reject` 的作用是将 `Promise` 对象由进行中转化为已失败

因为他们是函数所有都可以携带参数，把的到结果或错误传递出来
```
    promise.then((val) => {
        // 成功
    }, (err) => {
        // 失败
    })
```
