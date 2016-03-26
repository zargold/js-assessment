exports = (typeof window === 'undefined') ? global : window;

/*
 * @param cb is a function to run ...
 * @param obj is an object to call it on
 */
function expandUse(cb, obj) {

}

exports.objectsAnswers = {
    alterContext: function(fn, obj) {

        return fn.call(obj);
    },

    alterObjects: function(constructor, greeting) {

        constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
        // underscore's method already does hasOwnProp checks
        var mappedObjs = _.map(obj, function(val, key) {

            var stringy = key + ': ' + val;
            return stringy;
        });
        return mappedObjs;
    }
};
