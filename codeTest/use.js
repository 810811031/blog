const MPromise = require('./Promise')

let usePromise = new MPromise((resolve, reject) => {
    console.log('初始化')
    setTimeout(() => {
        resolve(1)
    }, 1000)
    
})

usePromise
    .then(res => {
        console.log(res)
        return 2
    })
    .then(res => {
        console.log(res)
    })