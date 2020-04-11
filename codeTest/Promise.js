function Promise(startFn) {
    const _this = this
    this.state  = 'pending'
    this.result = undefined
    this.error  = undefined
    this.waitResolveList = []
    this.waitRejectList  = []

    function resolve(result) {
        if (_this.state !== 'pending') return 
         _this.result = result
         _this.waitResolveList.forEach(fn => fn(result))
         _this.state  = 'resolved'
    }

    function reject(error) {
        if (_this.state !== 'pending') return 
        _this.error = error
        _this.waitRejectList.forEach(fn => fn(error))
        _this.state = 'rejected'
    }

    startFn(resolve, reject)

}

Promise.prototype.then = function (onResolveFn, onRejectFn) {
    if (this.state !== 'pending') {
        if (typeof onResolveFn === 'function') {
            this.waitResolveList.push(onResolveFn)
        }
        if (typeof onRejectFn !== 'function') {
            this.waitRejectList.push(onRejectFn)
        }
    }

    const promise_next = new Promise((resolve, reject) => { 
        // resolvePromise(promise_next, resolve(this.result), resolve, reject)
        console.log(123)
    })
    // console.log(promise_next)
    return promise_next
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) return new TypeError('Promise发生了循环引用')

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    resolvePromise(promise, y, resolve, reject)
                }, r => {
                    reject(r)
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

module.exports = Promise