// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()

function foo() {
    var bar;
    quux = '';

    return function zip() {
        var quux;
        bar = true;
    }

}

// foo()
//   var bar
//     quux = ?
//     return zip
//     zip()
//     var quux
//       bar = ?
