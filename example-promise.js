/**
 * Comparison of Promises and Callbacks
 */

/****************************************************************************
 * Callback Example
 * @param location
 * @param callback
 */
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
    /*
    * lame because it's called twice.
    * you can't be both successful and erroneous
    *
    * */
}

/*
getTempCallback('Philadelphia', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});
*/

/****************************************************************************
 * Promise Example
 * @param location
 * @returns {Promise}
 */

function getTempPromise(location) {
    return new Promise(function(resolve, reject) { /* ES6 promise constructor */
        /*
            Bonus: Promises only allow the following functions to be called only once (if our code is bad).
        */
        setTimeout(function() { // simulate delay for demo purposes
            resolve(79); // callback (temp = 79)
            reject('City not found'); // callback
        }, 1000);

    });
}

/*
getTempPromise('Philadelphia').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});
*/

/****************************************************************************
 * Challenge: add two numbers (and make sure they're numbers)
 */

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b); // callback
        } else {
            reject('a & b need to be numbers'); // callback
        }

    });
}

addPromise(5, 3).then(function(sum) {
    console.log('promise success', sum);
}, function(err) {
    console.log('promise err', err);
});