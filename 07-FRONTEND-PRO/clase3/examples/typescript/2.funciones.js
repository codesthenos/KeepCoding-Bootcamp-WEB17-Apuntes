function formatUser(name, age) {
    return "Name: ".concat(name, ", Age: ").concat(age);
}
function formatUser2(name, age) {
    var ret = "Name: ".concat(name);
    if (age) {
        ret += ", Age: ".concat(age);
    }
    return ret;
}
function printUser(name, age) {
    console.log(formatUser2(name, age));
}
var user1 = formatUser2('Nauel', 33);
var user2 = formatUser2('Pedro');
