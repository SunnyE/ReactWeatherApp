function getTempCallback (location, callback){
    callback(undefined, 78);
    callback('city not found');
}

getTempCallback('Philadelphia', function(err, temp){
        if(err){
            console.log('error', err);
        } else {
            console.log('success', temp); 
        }
});

function getTempPromise(location) {
    return new Promise (function (resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('city not found');
        }, 1000)
        
    });
};

getTempPromise('Philadelphia').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('error', err); 
});

function addPromise(a, b) {
    return new Promise (function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('A and B need to be numbers');
        }
    })
};

addPromise(2, 3).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('error', err);
});