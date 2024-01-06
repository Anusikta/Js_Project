// function fetchData(url, callback) {
//     setTimeout(function () {
//       const data = { result: 'Some data from the server' };
//       callback(data);
//     }, 2000); //ms
//   }
//   function handleData(data) {
//     console.log('Data received:', data.result);
// }


// fetchData('https://example.com/api/data', handleData);

// setTimeout(function(){
//     console.log("FUnction Executed");
// }, 5000)

// function add(a,b){
//     console.log("Add is called");
//     setTimeout(function(){
//         console.log("Add is executed");
//         return a+b;
//     }, 5000)
// }
function add(a, b, callback) {
  console.log("Add is called");
  setTimeout(function () {
    console.log("Add is executed");
    callback(a + b);
  }, 5000)
}
function display(x) {
  console.log("Data is " + x);
}

// let c = add(10,20);
// display(c)
add(10, 20, display)