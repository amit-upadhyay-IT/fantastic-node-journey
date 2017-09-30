
var makepassword32bytes = function (text) {

    var data = text;
    while (data.length <= 32)
    {
        data += data;
    }
    data = data.substr(0, 32);
    return data;
}

module.exports = makepassword32bytes;
