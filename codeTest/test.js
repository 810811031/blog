function Promise(executor) {
    this.state = 'pending'
    this.value = undefined
    this.err   = undefined
    let _this  = this
    this.onFulfilledFunc = []
    this.onRejectedFunc = []

    executor(resolve, reject)
    
    function resolve(value) {
        if (_this.state === 'pending') {
            _this.value = value
            _this.onFulfilledFunc.forEach(fn => fn(value))
            _this.state = 'resolved'
        }
    }

    function reject(err) {
        if (_this.state === 'pending') {
            _this.value = err
            _this.onRejectedFunc.forEach(fn => fn(err))
            _this.state = 'reject'
        }
    }

}

Promise.prototype.then = function (onFulfilled, onRejected) {
    if (this.state === 'pending') {
        if (typeof onFulfilled === 'function') {
            this.onFulfilledFunc.push(onFulfilled)
        }
        if (typeof onRejected === 'function') {
            this.onRejectedFunc.push(onRejected)
        }
    }

    if (this.state === 'resolved') {
        if (typeof onFulfilled === 'function') {
            onFulfilled(this.value)
        }
    }
    if (this.state === 'reject') {
        if (typeof onRejected === 'function') {
            onRejected(this.err)
        }
    }

    let pro = new Promise((resolve, reject) => {

    })
    
    return pro
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new TypeError('Promise发生了循环引用'))
    }

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then 
            if (typeof then === 'function') {
                let y = then.call(x, y => {
                    resolvePromise(promise2, y, resolve, reject)
                }, e => {
                    reject(e)
                })
            } else {
                resolve(x)
            }
        } catch (err) {
            reject(err)
        }
    } else {
        resolve(x)
    }
}


function log(text) {
    console.log(text)
}


let p = new Promise((resolve, reject) => {
    resolve(123)
})

p
.then(res => {
    console.log(res)
    return 1
})
.then(res => {
    log(res)
})