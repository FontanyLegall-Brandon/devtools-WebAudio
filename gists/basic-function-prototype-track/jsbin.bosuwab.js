Function.prototype.track = function() {
    var fn = this;
    return function() {
        //do tracking here
        console.log(arguments)
        return fn.apply(this, arguments);
    }
}

function sum(a, b) {
    return a + b;
}

var sumTracker = sum.track();
var onePlusTwo = sumTracker(1,2)