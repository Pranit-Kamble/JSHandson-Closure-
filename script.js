//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();


// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }


// function getl(lenght){
//     function getw(width){
//         return lenght*width
//     }
//     return getw(10)
// }
// console.log(getl(2))



// function outer(){
//     let count=0
//     function inner(){
//         count++
//         return count
//     }
//     return inner()
// }
// console.log(outer())


var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);