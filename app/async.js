exports = (typeof window === 'undefined') ? global : window;

var jsonFileUrl = '/data/testdata.json';

function extractPeople(data){
    var dataArray = _.pluck(data.people, 'name');
    var sortedArray = dataArray.sort();
    return sortedArray;
}
/*
* @param value = an arbitrary value to return after resolve
* @param url = a url from which to JSON data can be pulled.
* @param cb = a callback to run to manipulateData...
*/
function getData(url, value, cb) {
    var deferred = $.Deferred();
    $.getJSON(
        url,
        function(data) {
            if (value) {
                deferred.resolve(value);
            }
            else {
                deferred.resolve(cb(data));
            }
        },
        function(err) {
            deferred.reject(err);
        }
    );
    return deferred.promise();
}

exports.asyncAnswers = {
    async: function(value) {
        return getData(jsonFileUrl, value);
    },

    manipulateRemoteData: function(url) {
        return getData(jsonFileUrl, undefined, extractPeople);
    }
};
