/*
//Promise in javascript
let p = new Promise((resolve,reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
*/

/*
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutotrialCallback(callback, errorcallback) {
    if(userLeft) {
        errorcallback({
            name: 'User left',
            message: ':('
        })
    } else if(userWatchingCatMeme) {
        errorcallback({
            name: 'User Watching Cat Meme',
            message: 'WebDebSimplified < Cat'
        })
    } else {
        callback('Thumbs Up and Subscribe')
    }
}

watchTutotrialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name +  ' ' + error.message)
})
*/

/*
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutotrialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDebSimplified < Cat'
            })
        } else {
            resolve('Thumbs Up and Subscribe')
        }
    })   
}

watchTutotrialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name +  ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages => {
    console.log(messages)
}))
*/

// Async await
// -----------

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {
    try{
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch(err){
        console.log(err)
    }
}

doWork()